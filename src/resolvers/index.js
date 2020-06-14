const user = require('./user')
const query = require('./query')
const mutation = require('./mutation')
const subscription = require('./subscription')

module.exports = {
    User: user,
    Query: query,
    Mutation: mutation,
    //Subscription: subscription
}