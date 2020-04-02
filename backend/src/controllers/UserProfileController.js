const connection = require('../database/connection');

module.exports = {
    async index(req,res){

        const username = req.headers.username;

        const userInfo = await connection('users')
        .where('username', username)
        .select('name', 'saldo')
        .first();

        return res.json({message:`seja bem vindo ${userInfo.name}, seu saldo é ${userInfo.saldo}`})
    }
}