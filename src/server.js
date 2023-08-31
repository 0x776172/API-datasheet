require("dotenv").config()
const config = require("../config.json")
const express = require("express")
const router = require("../app/routes/router.js")
const serverless = require("serverless-http")

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome!")
})

app.use("api/datasheet", router)

// app.listen(5000, () => {
//   console.log(`Connected to port ${config.PORT}`)
// })

module.exports = app
module.exports.handler = serverless(app)