const connection = require('../database/connection');
const bcrypt = require('bcryptjs');




module.exports = {
    async create(req, res){
        const { userId, userPassword } = req.body;


        const ong = await connection('ongs')
        .where('id', userId)
        .select('name')
        .first();
        

        
        if(!ong){
            return res.status(400).json({error: 'No Ong found with this Id'});
        }

        const {password} = await connection('ongs')
        .where('id', userId)
        .select('password')
        .first();
    
            
    
    
        if(!await bcrypt.compare(userPassword, password)){
            return res.status(400).json({error: 'Password Invalid'});
        }
    
        return res.json({userPassword, password, ong});

        }
}