const sql = require("mysql2")
const db = require("../config/db.config.js")

const mysql = sql.createPool({
  host: db.HOST,
  user: db.USER,
  password: db.PASSWORD,
  database: db.DBNAME
})

console.log(db)

module.exports = mysql;