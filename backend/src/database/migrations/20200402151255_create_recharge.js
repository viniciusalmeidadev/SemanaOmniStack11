
exports.up = function(knex) {
    return knex.schema.createTable('recharge', function(table){
        table.increments();

        table.decimal('value').notNullable();
        table.datetime('dateRecharge').defaultTo(knex.fn.now());



      
        table.string('username').notNullable();

        table.foreign('username').references('username').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('recharge');
};
