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

app.use(".netlify/functions/api/datasheet", router)

app.listen(config.PORT, () => {
  console.log(`Connected to port ${config.PORT}`)
})

module.exports = app
module.exports.handler = serverless(app)