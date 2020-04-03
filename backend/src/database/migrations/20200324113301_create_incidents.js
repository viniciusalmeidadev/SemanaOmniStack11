
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.decimal('collected').notNullable();
      
        table.string('ong_id').notNullable();
        table.string('ongName').notNullable();

        table.foreign('ong_id').references('id').inTable('ongsCompleted');
        table.foreign('ongName').references('ongName').inTable('ongsCompleted');
        
    })
        
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
