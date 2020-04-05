const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const {ongname} = req.headers;

        const { page = 1 } = req.query;
    
        const [count] = await connection('donations')
        .where('ongName', ongname)
        .count();

        const donationReceived = await connection('donations')
        .limit(10)
        .offset((page - 1) * 10)
        .where('ongName', ongname)
        .select('*');

        res.header('X-Total-Count', count['count(*)']);

        return res.json({donationReceived});


    }
}