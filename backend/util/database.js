const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mfa',
    password: ''
});

module.exports = connection.promise();