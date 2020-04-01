const connection = require('../database/connection');
const bcrypt = require('bcryptjs');

const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index (req,res){
        const users = await connection('users').select('*');
    
        return res.json(users);
    },

    async create(req,res){
        const {name, email, username} = req.body;
        let { password } = req.body;

            const id = generateUniqueId();
            const hash = await bcrypt.hash(password, 10);
            const saldo = 0;
            password = hash;


            uName = await connection('users')
            .where('username', username)
            .select('username')
            .first();

            if(uName){
                return res.status(400).json({warning: 'Este usuário já está sendo usado!'});
            }

            uEmail = await connection('users')
            .where('email', email)
            .select('email')
            .first();

            if(uEmail){
                return res.json({warning: 'Este e-mail já está sendo usado!'})
            }

        
            await connection('users').insert({
                id,
                username,
                name,
                email,
                password,
                saldo
            })
        
         
            return res.json({id, username, password, email, saldo});
       
       
    }
}