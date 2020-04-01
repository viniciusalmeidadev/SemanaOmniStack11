require('dotenv').config();
const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    async create(req,res){
        const{uName, userPass} = req.body;

        const name = await connection('users')
        .where('username', uName)
        .select('name')
        .first();

        if(!name){
            return res.status(400).json({erro: 'Usuário não encontrado'})
        }

        const { password } = await connection('users')
        .where('username', uName)
        .select('password')
        .first();

        if(!await bcrypt.compare(userPass, password)){
            return res.status(400).json({erro: 'Senha invalida'})
        }

        const token = jwt.sign({id: uName}, process.env.APP_SECRET);

        return res.json({uName, name, token})
    }
}