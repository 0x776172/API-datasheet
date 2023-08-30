const supabase = require("./db.model.js")

class Description {
  constructor(description) {
    this.product_code_name = description.product_code_name;
    this.description = description.description;
    this.specification = description.specification;
  }

  static async create(desc, result) {
    const { error } = await supabase
      .from("product_description")
      .insert({
        product_code_name: desc.product_code_name,
        description: desc.description,
        specification: desc.specification
      })
    result(error, { status: error ? error.code : 200, message: error ? error.message : "Insert Success" });
  }

  static async get(id, result) {
    const cmd = supabase.from("product_description").select()
    if (id) cmd.eq("id", id)
    const res = await cmd
    result(res.error, res.data);
  }
}

module.exports = Description