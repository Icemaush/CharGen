const connection = require('../db/connection');
const path = require('path');
const databasePath = path.resolve('db/wowgen.db');

// Get all factions
exports.getFactions = async (req, res) => {
    var db = connection.connect(databasePath);

    var sql = 'SELECT * FROM wow_factions';
    var result;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log('ERROR');
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.name);
        });
        result = rows;
    });
    
    res.json(result);

    connection.close(db);
    return result;
}