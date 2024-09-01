const express = require("express");
const app = express();

// 使用 express.json() 中间件来解析 JSON 格式的请求体
// 使用 express.urlencoded() 中间件来解析 URL 编码的请求体
app.use(express.json(), express.urlencoded({ extended: true }));

app.use(require("./common/utils/morgan")); // 日志

app.use("/", require("./Controller"));

module.exports = app;
