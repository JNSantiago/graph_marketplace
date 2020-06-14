module.exports = {
    client: 'mysql',
    connection: {
        database: 'market',
        user: 'joao',
        password: '1234'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
}
