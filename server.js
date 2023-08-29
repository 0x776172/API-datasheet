const config = require("./config.json")
const express = require("express")
require("dotenv").config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome!")
})

require("./app/routes/router.js")(app)

app.listen(config.PORT, () => {
  console.log(`Connected to port ${config.PORT}`)
})