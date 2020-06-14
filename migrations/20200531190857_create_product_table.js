
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary()
        table.string('title').notNull()
        table.string('description').notNull()
        table.integer('category_id').unsigned()
        table.foreign('category_id').references('categories.id')

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
