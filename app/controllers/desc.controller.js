const Description = require("../models/desc.model.js")

class method {
  constructor() { }

  static create(req, res) {
    if (!req.body.product_code_name) {
      res.status(400).send({
        status: 400,
        message: "Content cannot be empty!"
      });
      return
    }
    const d = new Description({
      product_code_name: req.body.product_code_name,
      description: req.body.description,
      specification: req.body.specification
    })
    Description.create(d, (status, data) => {
      if (status) {
        res.status(500).send({ status: 500, message: status.message })
      }
      else res.send(data)
    })
  }

  static get(req, res) {
    Description.get(req.params.id, (err, description) => {
      if (err) {
        res.status(400).send({
          message: err.message
        })
      }
      else res.send({ description })
    })
  }

}


module.exports = method

// exports.get = (req, res) => {
//   res.send("Mantap")
// }