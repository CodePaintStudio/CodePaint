//UserDao.js
const db = require("../common/utils/db");
class UserDao {
  async getUserList() {
    return await db.select("*").from("user");
  }
}
module.exports = new UserDao();
