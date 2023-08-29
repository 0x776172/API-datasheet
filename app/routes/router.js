module.exports = (app) => {
  let router = require('express').Router()
  let manufacturer = require("../controllers/manufacturer.controller.js")
  let family = require("../controllers/family.controller.js")

  router.post('/manufacturers', manufacturer.create)
  router.get('/manufacturers', manufacturer.get)

  router.post('/families', family.create)
  router.get('/families', family.get)

  router.post('/products', (req, res) => { res.send("post to products coming soon") })
  router.get('/products', (req, res) => { res.send("get products coming soon") })

  router.post('/descriptions',
    (req, res) => { res.send("post to descriptions coming soon") })
  router.get('/descriptions',
    (req, res) => { res.send("get descriptions coming soon") })

  app.use("/api/datasheet", router)
}   