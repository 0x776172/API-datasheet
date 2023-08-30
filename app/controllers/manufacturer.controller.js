const Manufacturer = require("../models/manufacturer.model.js")

class method {
  constructor() { }

  static create(req, res) {
    if (!req.body.codeName) {
      res.status(400).send({
        status: 400,
        message: "Content cannot be empty!"
      });
      return
    }
    const m = new Manufacturer({ codeName: req.body.codeName, name: req.body.name })
    Manufacturer.create(m, (status, data) => {
      if (status) {
        res.status(500).send({ status: 500, message: status.message })
      }
      else res.send(data)
    })
  }

  static get(req, res) {
    Manufacturer.get(req.params.id, (err, manufacturers) => {
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