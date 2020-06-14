
exports.up = function(knex, Promise) {
    return knex.schema.createTable('profiles', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('cpf').notNull()
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('profiles')
};
