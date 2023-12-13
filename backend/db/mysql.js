const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'client',
    password: 'secret',
    database: 'employee'
})

connection.connect();

module.exports = connection;