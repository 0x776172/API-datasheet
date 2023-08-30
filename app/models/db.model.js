// const sql = require("mysql2")
const supa = require("@supabase/supabase-js")
const db = require("../config/db.config.js")

// const mysql = sql.createPool({
//   host: db.HOST,
//   user: db.USER,
//   password: db.PASSWORD,
//   database: db.DBNAME
// })

const supabase = supa.createClient(process.env.DB_URL, process.env.DB_KEY)

module.exports = supabase;