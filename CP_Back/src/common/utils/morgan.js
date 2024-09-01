//src/common/utils/morgan.js
const morgan = require("morgan");

// 请求IP 方法 状态 路径 响应时间
module.exports = morgan(
    ":remote-addr :method :status :url :response-time ms"
);
