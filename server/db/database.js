const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const databasePath = path.resolve('db/wowgen.db');

// Connect to database
function connect(path) {
    let db = new sqlite3.Database(path, (err) => {
        if (err) {
            console.error(err.message);
        }
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
}

// Query database
function query(sql) {
    var result = function(callback) {
        var db = connect(databasePath);

        db.serialize(function() {
            db.all(sql, function(err, allRows) {
                if(err != null){
                    console.log(err);
                    callback(err);
                }
        
    
                callback(allRows);
                db.close();
            });
        });
    }
    


    // db.all(sql, [], (err, rows) => {
    //     if (err) {
    //         console.log('ERROR');
    //         throw err;
    //     }
    //     // res.json({
    //     //     message: "success",
    //     //     data: rows
    //     // });
    //     result = rows;
    // });
    // close(db);
    return result;
}

module.exports = {connect, close, query};