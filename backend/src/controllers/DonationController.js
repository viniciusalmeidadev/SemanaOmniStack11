const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const donations = await connection('donations')
        .select('*');

        return res.json({donations})
    },
    async create(req,res){
        const {id} = req.params;
        const {username} = req.headers;
        const {donation} = req.body;

        const {ongName} = await connection('incidents')
        .where('incidents.id', id)
        .select('ongName')
        .first();

        const {saldo} = await connection('users')
        .where('username', username)
        .select('saldo')
        .first();

        if(saldo < donation){
            return res.json({message: `Você não tem saldo suficiente para doar!${ongName}`})
        }

        await connection('users')
        .where('username', username)
        .decrement('saldo', donation);

        await connection('incidents')
        .where('id', id)
        .increment('collected', donation);

        await connection('donations')
        .insert({
            username,
            ongName,
            'value': donation
        })

        return res.json(donation);

        
    }
};
