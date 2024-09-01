// 负责所有路由的导入
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.use("/user", require("./UserController"));

module.exports = router;
