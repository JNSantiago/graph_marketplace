
exports.up = function(knex, Promise) {
    return knex.schema.createTable('addresses', table => {
        table.increments('id').primary()
        table.string('neighborhood').notNull()
        table.string('street').notNull()
        table.integer('number').notNull()
        table.string('zip_code').notNull()
        table.integer('city_id').unsigned()
        table.foreign('city_id').references('cities.id')

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('addresses')
};