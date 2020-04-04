
exports.up = function(knex) {
  return knex.schema.createTable('donations', function(table){
      table.increments();
      table.decimal('value').notNullable();
      table.string('username').notNullable();
      table.string('ongName').notNullable();
      table.string('title').notNullable();
      table.string('incident_id').notNullable();
      table.datetime('dateDonate').defaultTo(knex.fn.now());

      table.foreign('username').references('username').inTable('users');
      table.foreign('ongName').references('ongName').inTable('ongsCompleted');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('donations');
};
