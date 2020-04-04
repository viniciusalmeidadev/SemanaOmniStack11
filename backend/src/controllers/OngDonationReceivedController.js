const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const {ongname} = req.headers;

        const donationReceived = await connection('donations')
        .where('ongName', ongname)
        .select('*');

        return res.json({donationReceived});


    }
}