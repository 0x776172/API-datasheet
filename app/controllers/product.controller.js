const Product = require("../models/product.model.js")

class method {
  constructor() { }

  static create(req, res) {
    if (!req.body.family_code_name) {
      res.status(400).send({
        status: 400,
        message: "Content cannot be empty!"
      });
      return
    }
    const p = new Product({
      family_code_name: req.body.family_code_name,
      code_name: req.body.code_name,
      name: req.body.name,
      product_type: req.body.product_type
    })

    Product.create(p, (status, data) => {
      if (status) {
        res.status(500).send({ message: status.message })
      }
      else res.send(data)
    })
  }

  static get(req, res) {
    console.log(req.query)
    Product.get(req.query, (err, product) => {
      if (err) {
        res.status(400).send({ message: err.message })
      }
      else res.send({ product })
    })
  }
}

module.exports = method