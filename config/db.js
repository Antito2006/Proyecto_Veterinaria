const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'veterinaria'
});

db.connect((err) => {

    if(err){
        console.log(err);
        return;
    }

    console.log('Base de datos conectada');
});

module.exports = db;