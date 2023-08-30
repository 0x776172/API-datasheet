const Family = require("../models/family.model.js")

class Method {
  constructor() { }

  static create(req, res) {
    if (!req.body.manufacturer_code_name) {
      res.status(400).send({
        status: 400,
        message: "Content cannot be empty!"
      });
      return
    }
    const f = new Family({
      manufacturer_code_name: req.body.manufacturer_code_name,
      code_name: req.body.code_name,
      name: req.body.name,
      description: req.body.description
    })
    Family.create(f, (status, data) => {
      if (status) {
        res.status(500).send({ message: status.message })
      }
      else res.send(data)
    })
  }

  static get(req, res) {
    Family.get(req.params.id, (err, family) => {
      if (err) {
        res.status(400).send({
          message: err.message
        })
      }
      else res.send({ family })
    })
  }
}

module.exports = Method