module.exports = (app) => {
  let router = require('express').Router()
  let manufacturer = require("../controllers/manufacturer.controller.js")
  let family = require("../controllers/family.controller.js")

  router.post('/addManufacturer', manufacturer.create)
  router.get('/getManufacturer', manufacturer.get)

  router.post('/addFamily', family.create)
  router.get('/getFamily', family.get)

  app.use("/api/datasheet", router)
}   