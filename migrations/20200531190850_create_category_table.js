
exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', table => {
        table.increments('id').primary()
        table.string('description').notNull()

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('categories')
};
