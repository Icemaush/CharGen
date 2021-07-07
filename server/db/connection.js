const sqlite3 = require('sqlite3').verbose();

// Connect to database
function connect(path) {
    let db = new sqlite3.Database(path, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the wowgen database.');
    });
    return db;
}

// Close connection to the database
function close(database) {
    database.close((err) => {
        if (err) {
            return console.error(err.message);
        }
    });
    return 'Closed connection to the wowgen database.';
}

module.exports = {connect, close};