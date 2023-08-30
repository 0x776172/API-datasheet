const supabase = require("./db.model.js")

class Description {
  constructor(description) {
    this.pId = description.pId;
    this.desc = description.desc;
    this.spec = description.spec;
  }

  static async create(desc, result) {
    const { error } = await supabase
      .from("product_description")
      .insert({
        prod_id: desc.pId,
        description: desc.desc,
        specification: desc.spec
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