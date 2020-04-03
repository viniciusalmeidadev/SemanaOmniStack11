const connection = require('../database/connection');
const bcrypt = require('bcryptjs')

const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index (req,res){
        const ongs = await connection('ongsCompleted').select('*');
    
        return res.json(ongs);
    },

    async create(req,res){
        const {name, ongname, email, whatsapp, city, uf} = req.body;
        let { password } = req.body;

            const id = generateUniqueId();
            const hash = await bcrypt.hash(password, 10);
            password = hash;
            await connection('ongsCompleted').insert({
                id,
                'ongName': ongname,
                name,
                email,
                whatsapp,
                city,
                uf,
                password
            })
        
         
            return res.json({id, password, email});
       
    },

    async delete(req,res){
        const { id } = req.params;
       
        await connection('ongsCompleted').where('id', id).delete();

        return res.status(204).send();

}
};