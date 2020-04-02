const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const recharges = await connection('recharge')
        .select('*');

        return res.json({recharges});
    },
    async update(req, res) {
    const { username } = req.headers;


    const { value } = req.body;

    //Fazendo a recarga
     await connection('users')
    .where('username', username)
    .increment('saldo', value);

    //Gerando uma recarga para o histórico de recargas
    await connection('recharge').insert({
        username,
        value
    });

    return res.json({message: 'tudo certo'});

}
}