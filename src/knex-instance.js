const knex = require('knex');

const options = ({
    client: 'pg',
    connection: process.env.TEST_DB_URL
})

module.exports = knex(options);