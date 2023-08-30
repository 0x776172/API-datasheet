const Description = require("../models/desc.model.js")

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
    const d = new Description({
      pId: req.body.pId,
      desc: req.body.desc,
      spec: req.body.spec
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