const connection = require('../database/connection');

module.exports = {
    async update(req, res) {
    const { username, saldonow } = req.headers;


    const { value } = req.body;

    const recarga = value + saldonow;



     await connection('users')
    .where('username', username)
    .update('saldo', recarga);

    const {saldo} = await connection('users')
    .where('username', username)
    .select()
    .first();

    

    return res.json({saldo});
}
}