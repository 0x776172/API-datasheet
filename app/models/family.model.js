const supabase = require("./db.model.js")

class Family {
  constructor(family) {
    this.mId = family.mId;
    this.name = family.name;
    this.desc = family.desc
  }

  static async create(family, result) {
    const { error } = await supabase
      .from("product_family")
      .insert({
        m_id: family.mId,
        name: family.name,
        description: family.desc
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