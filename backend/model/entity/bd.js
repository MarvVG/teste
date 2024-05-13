const mysql = require("mysql");

const bd = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    database:"sisnotas"
});

module.exports = bd;