const connection = require('../database/connection');

module.exports = {
    async index(req,res){

        const {username} = req.headers;

        const { page = 1 } = req.query;

        const [count] = await connection('donations')
        .where('username', username)
        .count();

        const data = await connection('donations')
        .limit(5)
        .offset((page - 1) * 5)
        .where('username', username)
        .select('*');

        res.header('X-Total-Count', count['count(*)']);

        return res.json({data});


    }
}