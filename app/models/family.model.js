const sql = require("./db.model.js")

class Family {
  constructor(family) {
    this.mId = family.mId;
    this.name = family.name;
    this.desc = family.desc
  }

  static create(family, result) {
    sql.query(`INSERT INTO product_family(m_id, name, description) VALUES (${family.mId}, '${family.name}', '${family.desc}')`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...family });
    });
  }

  static get(id, result) {
    let query = "SELECT * FROM product_family";
    if (id) query += ` WHERE id=${id}`;
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, res);
    });
  }
}

module.exports = Family