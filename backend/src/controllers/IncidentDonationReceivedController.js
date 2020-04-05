const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const {id} = req.params;

        const { page = 1} = req.query;

        const [count] = await connection('donations')
        .where('incident_id', id)
        .count();

        const data = await connection('donations')
        .limit(10)
        .offset((page - 1) * 10)
        .where('incident_id', id)
        .select('*');

        res.header('X-Total-Count', count['count(*)']);

        return res.json({data});


    }
}