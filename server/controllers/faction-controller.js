const connection = require('../db/connection');
const path = require('path');
const databasePath = path.resolve('db/wowgen.db');

// Get all factions
exports.getFactions = async (req, res) => {
    var db = connection.connect(databasePath);
    var sql = 'SELECT * FROM wow_factions';
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log('ERROR');
            throw err;
        }
        res.json({
            message: "success",
            data: rows
        });
    });
    connection.close(db);
}