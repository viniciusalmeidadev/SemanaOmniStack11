require('dotenv').config();
const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');





module.exports = {
    async create(req, res){
        const { userId, userPassword } = req.body;


        const login = await connection('ongsCompleted')
        .where('ongName', userId)
        .select(['name', 'id'])
        .first();
        
        
        
        if(!login){
            const email = await connection('ongsCompleted')
            .where('email', userId)
            .select(['name', 'id'])
            .first();

           

            if(!email){
                return res.json({message: 'Login error: Username or E-mail is invalid!'})
            }

            const name = email.name;
            const id = email.id;
            
            const {password} = await connection('ongsCompleted')
            .where('id', id)
            .select('password')
            .first();
        
                
        
        
            if(!await bcrypt.compare(userPassword, password)){
                return res.status(400).json({error: 'Password Invalid'});
            }
        
            const token = jwt.sign({id: id}, process.env.APP_SECRET);
    
            return res.json({id, name, token});
    
        }
        
        
        const name = login.name;
        const id = login.id;
        

        const {password} = await connection('ongsCompleted')
        .where('id', id)
        .select('password')
        .first();
    
            
    
    
        if(!await bcrypt.compare(userPassword, password)){
            return res.status(400).json({error: 'Password Invalid'});
        }
    
        const token = jwt.sign({id: id}, process.env.APP_SECRET);

        return res.json({id, name, token});

        }
}