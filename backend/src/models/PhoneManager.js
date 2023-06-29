const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  getAll() {
    return this.database.query(`
      SELECT ${this.table}.id,brand, model, os, ram, memory, color, charger, cable, categoryPrice_id, state_id 
      FROM ${this.table}
      JOIN categoryPrice ON ${this.table}.categoryPrice_id = categoryPrice.id
    `);
  }

  add(phoneData) {
    return this.database.query("INSERT INTO phone SET ?", phoneData);
  }
}

module.exports = PhoneManager;
