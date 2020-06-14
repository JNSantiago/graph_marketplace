
exports.up = function(knex, Promise) {
    return knex.schema.createTable('prices', table => {
        table.increments('id').primary()
        table.float('value').notNull()
        
        table.integer('product_id').unsigned()
        table.foreign('product_id').references('products.id')

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('prices')
};
