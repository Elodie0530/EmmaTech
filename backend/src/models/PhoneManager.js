const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  getall(phone) {
    return this.database.query(
      `SELECT *
      FROM ${this.table}
      JOIN category_price ON ${this.table}.categoryPrice.id = categoryPrice_id
      WHERE phone.id = ?`,
      [phone]
    );
  }
}
export default PhoneManager;
