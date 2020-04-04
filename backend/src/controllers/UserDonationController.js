const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const {username} = req.headers;

        const yourDonations = await connection('donations')
        .where('username', username)
        .select('*');

        return res.json({yourDonations});


    }
}