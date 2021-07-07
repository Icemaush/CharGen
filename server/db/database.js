const connection = require('./connection');
const database = './wowgen.db';

// Get factions
function getFactions() {
    const db = connection.connect(database);

    var sql = 'SELECT * FROM wow_factions';
    var result;
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          console.log(row.name);
        });
        result = rows;
    });

    db.close();
    return result;
}