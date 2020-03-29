const connection = require('../database/connection');
const bcrypt = require('bcryptjs')

const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index (req,res){
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req,res){
        const {name, email, whatsapp, city, uf} = req.body;
        let { password } = req.body;

            const id = generateUniqueId();
            const hash = await bcrypt.hash(password, 10);
            password = hash;
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
                password
            })
        
         
            return res.json({id, password, email});
       
    }
};