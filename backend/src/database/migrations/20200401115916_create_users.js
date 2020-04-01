
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.string('id').primary();
        table.string('username').unique();
        table.string('name').notNullable();
        table.string('email').unique();
        table.string('password').notNullable();
        table.decimal('saldo').notNullable();
      
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
