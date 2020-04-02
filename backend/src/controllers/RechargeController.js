const connection = require('../database/connection');

module.exports = {
    async update(req, res) {
    const { username } = req.headers;

    const {moreSaldo}= req.body;

    

   

    
    
     await connection('users')
    .where('username', username)
    .update('saldo', moreSaldo);

    return res.json({moreSaldo})
}
}