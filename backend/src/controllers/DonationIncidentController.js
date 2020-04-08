const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const {id} = req.params;

        const incident = await connection('incidents')
        .where('id', id)
        .select('*')
        .first();

        return res.json(incident)

    }
}