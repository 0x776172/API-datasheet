const supabase = require("./db.model.js")

class Product {
  constructor(product) {
    this.family_code_name = product.family_code_name;
    this.code_name = product.code_name;
    this.name = product.name;
    this.product_type = product.product_type
  }

  static async create(product, result) {
    const { error } = await supabase
      .from("product_name")
      .insert({
        family_code_name: product.family_code_name,
        code_name: product.code_name,
        name: product.name,
        product_type: product.product_type
      })
    result(error, { status: error ? error.code : 200, message: error ? error.message : "Insert Success" });
  }

  static async get({ id, type, family }, result) {
    const cmd = supabase.from("product_name").select()
    if (id) cmd.eq("id", id)
    else if (type) cmd.eq("product_type", type)
    else if (family) cmd.eq("family_code_name", family)
    const res = await cmd
    result(res.error, res.data);
  }
}

module.exports = Product