const sql = require("./db.model.js")


class Manufacturer {
  constructor(manufacturer) {
    this.codeName = manufacturer.codeName;
    this.name = manufacturer.name;
  }

  static create(manufacturer, result) {
    sql.query(`INSERT INTO MANUFACTURER(code_name, name) VALUE ('${manufacturer.codeName}', '${manufacturer.name}')`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...manufacturer });
    });
  }

  static get(id, result) {
    let query = "SELECT * FROM MANUFACTURER";
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



module.exports = Manufacturer
