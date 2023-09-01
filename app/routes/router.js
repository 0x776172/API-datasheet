const router = require('express').Router()
const manufacturer = require("../controllers/manufacturer.controller.js")
const family = require("../controllers/family.controller.js")
const product = require("../controllers/product.controller.js")
const desc = require("../controllers/desc.controller.js")

router.get('/hello', (req, res) => res.json({ status: 200, message: "Welcome!" }))


router.post('/manufacturers', manufacturer.create)
router.get('/manufacturers', manufacturer.get)
router.get('/manufacturers/:id', manufacturer.get)

router.post('/families', family.create)
router.get('/families', family.get)
router.get('/families/:id', family.get)

router.post('/products', product.create)
router.get('/products', product.get)

router.post('/descriptions', desc.create)
router.get('/descriptions', desc.get)
router.get('/descriptions/:id', desc.get)


module.exports = router
