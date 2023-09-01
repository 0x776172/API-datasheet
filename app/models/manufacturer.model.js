const supabase = require("./db.model.js")

class Manufacturer {
  constructor(manufacturer) {
    this.code_name = manufacturer.code_name;
    this.name = manufacturer.name;
  }

  static async create(manufacturer, result) {
    const { error } = await supabase
      .from("product_manufacturer")
      .insert({
        code_name: manufacturer.code_name,
        name: manufacturer.name
      })
    result(error, {
      status: error ? error.code : 200,
      message: error ? error.message : "Insert Success"
    });
  }

  static async get(id, result) {
    const cmd = supabase.from("product_manufacturer").select()
    if (id) cmd.eq("id", id)
    const res = await cmd
    result(res.error, res.data);
  }
}

module.exports = Manufacturer
