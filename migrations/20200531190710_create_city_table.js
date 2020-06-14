exports.up = function(knex, Promise) {
    return knex.schema.createTable('cities', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.integer('country_id').unsigned()
        table.foreign('country_id').references('countries.id')

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cities')
};