const supabase = require("./db.model.js")

class Product {
  constructor(product) {
    this.famId = product.famId;
    this.name = product.name
  }

  static async create(product, result) {
    const { error } = await supabase
      .from("product_name")
      .insert({
        family_id: product.famId,
        name: product.name
      })
    result(error, { status: error ? error.code : 200, message: error ? error.message : "Insert Success" });
  }

  static async get(id, result) {
    const cmd = supabase.from("product_name").select()
    if (id) cmd.eq("id", id)
    const res = await cmd
    result(res.error, res.data);
  }
}

module.exports = Product