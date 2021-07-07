import * as connection from './connection';

const database = './wowgen.db';

// Get factions
export function getFactions() {
    const db = connection.connect(database);

    var sql = 'SELECT * FROM wow_factions';
    var result = db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        // rows.forEach((row) => {
        //   console.log(row.name);
        // });
    });

    db.close();
    return result;
}