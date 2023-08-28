const express = require("express")

require("dotenv").config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send("euy")
})

require("./app/routes/router.js")(app)

app.listen(process.env.PORT, () => {
  console.log(`Connected to port ${process.env.PORT}`)
})