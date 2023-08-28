const Manufacturer = require("../models/manufacturer.model.js")

class method {
  constructor() { }

  static create(req, res) {
    if (!req.body) {
      res.status(400).send({
        status: 400,
        message: "Content cannot be empty!"
      });
    }
    const m = new Manufacturer({ codeName: req.body.codeName, name: req.body.name })
    Manufacturer.create(m, (status, data) => {
      if (status) {
        res.status(500).send({ message: "error" })
      }
      else res.send(data)
    })
  }

  static get(req, res) {
    Manufacturer.get(req.query.id, (err, manufacturers) => {
      if (err) {
        res.status(400).send({
          message: err.message
        })
      }
      else res.send({ manufacturers })
    })
  }

}


module.exports = method

// exports.get = (req, res) => {
//   res.send("Mantap")
// }