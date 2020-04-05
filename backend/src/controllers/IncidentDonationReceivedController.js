const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const {id} = req.params;

        const data = await connection('donations')
        .where('incident_id', id)
        .select('*');

        return res.json({data});


    }
}