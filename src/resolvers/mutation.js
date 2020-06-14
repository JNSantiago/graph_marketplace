const db = require('../config/database')
const bcrypt = require('bcrypt-nodejs')

const { PubSub } = require('apollo-server')
const pubSub = new PubSub()

module.exports = {
    async register(_, { data }) {
        try {
            const salt = bcrypt.genSaltSync()
            data.password = bcrypt.hashSync(data.password, salt)

            const [ id ] = await db('users')
                .insert(data)

            return db('users')
                .where({ id }).first()
        }catch(e) {
            console.log(e)
            throw new Error(e.sqlMessage)
        }
    }
}