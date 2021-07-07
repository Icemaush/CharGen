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

        console.log(rows);
        rows.forEach((row) => {
            console.log(row.name);
        });
        res.json({
            message: "success",
            data: rows
        });
    });
    
console.log(result);

    

    connection.close(db);
    return result;
}