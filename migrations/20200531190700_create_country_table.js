exports.up = function(knex, Promise) {
    return knex.schema.createTable('countries', table => {
        table.increments('id').primary()
        table.string('uf').notNull()
        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('countries')
};