const Product = require("../models/product.model.js")

class method {
  constructor() { }

  static create(req, res) {
    if (!req.body.mId) {
      res.status(400).send({
        status: 400,
        message: "Content cannot be empty!"
      });
      return
    }
    const p = new Product({
      famId: req.body.famId,
      name: req.body.name
    })

    Product.create(p, (status, data) => {
      if (status) {
        res.status(500).send({ message: status.message })
      }
      else res.send(data)
    })
  }

  static get(req, res) {
    Product.get(req.params.id, (err, product) => {
      if (err) {
        res.status(400).send({ message: err.message })
      }
      else res.send({ product })
    })
  }
}

module.exports = method