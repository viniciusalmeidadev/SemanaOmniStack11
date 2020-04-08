const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const {id} = req.params;

        const { page = 1} = req.query;

        const [count] = await connection('donations')
        .where('incident_id', id)
        .count();

        const donations = await connection('donations')
        .limit(12)
        .offset((page - 1) * 12)
        .where('incident_id', id)
        .select('*');

        res.header('X-Total-Count', count['count(*)']);

        return res.json(donations);


    }
}