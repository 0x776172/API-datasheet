const router = require('express').Router()
const manufacturer = require("../controllers/manufacturer.controller.js")
const family = require("../controllers/family.controller.js")
const product = require("../controllers/product.controller.js")
const desc = require("../controllers/desc.controller.js")

router.post('/manufacturers', manufacturer.create)
router.get('/manufacturers', manufacturer.get)
router.get('/manufacturers/:id', manufacturer.get)

router.post('/families', family.create)
router.get('/families', family.get)
router.get('/families/:id', family.get)

router.post('/products', (req, res) => { res.send("post to products coming soon") })
router.get('/products', (req, res) => { res.send("get products coming soon") })

router.post('/descriptions',
  (req, res) => { res.send("post to descriptions coming soon") })
router.get('/descriptions',
  (req, res) => { res.send("get descriptions coming soon") })


module.exports = router
