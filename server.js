require("dotenv").config()
const config = require("./config.json")
const express = require("express")
const router = require("./app/routes/router.js")

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome!")
})

app.use("/api/datasheet", router)

app.listen(config.PORT, () => {
  console.log(`Connected to port ${config.PORT}`)
})