const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const {username} = req.headers;

        const [count] = await connection('donations')
        .where('username', username)
        .count();

        const yourDonations = await connection('donations')
        .where('username', username)
        .select('*');

        res.header('X-Total-Count', count['count(*)']);

        return res.json({yourDonations});


    }
}