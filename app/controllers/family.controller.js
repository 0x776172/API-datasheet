const Family = require("../models/family.model.js")

class Method {
  constructor() { }

  static create(req, res) {
    if (!req.body.mId) {
      res.status(400).send({
        status: 400,
        message: "Content cannot be empty!"
      });
      return
    }
    const f = new Family({ mId: req.body.mId, name: req.body.name, description: req.body.desc })
    Family.create(f, (status, data) => {
      if (status) {
        res.status(500).send({ message: "error" })
      }
      else res.send(data)
    })
  }

  static get(req, res) {
    Family.get(req.query.id, (err, family) => {
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