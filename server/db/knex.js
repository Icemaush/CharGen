const knex = require('knex');

// Connect to database
const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: 'wowgen.db'
    }
});

module.exports = connectedKnex;