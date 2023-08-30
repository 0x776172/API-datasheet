const supabase = require("./db.model.js")

class Family {
  constructor(family) {
    this.manufacturer_code_name = family.manufacturer_code_name;
    this.code_name = family.code_name;
    this.name = family.name;
    this.description = family.description
  }

  static async create(family, result) {
    const { error } = await supabase
      .from("product_family")
      .insert({
        manufacturer_code_name: family.manufacturer_code_name,
        code_name: family.code_name,
        name: family.name,
        description: family.description
      })
    result(error, {
      status: error ? error.code : 200,
      message: error ? error.message : "Insert Success"
    });
  }

  static async get(id, result) {
    const cmd = supabase.from("product_family").select()
    if (id) cmd.eq("id", id)
    const res = await cmd
    result(res.error, res.data);
  }
}

module.exports = Family