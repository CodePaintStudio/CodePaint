// UserService.js
const UserDao = require("../dao/UserDao");

class UserService {
    async getUserList(){
        return await UserDao.getUserList();
    }
}
module.exports = new UserService();
