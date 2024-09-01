//src/common/utils/db.js
const { MySQLConfig } = require("../config");
const knex = require("knex")(MySQLConfig);
// 监听 'query' 事件
knex.on("query", (query) => {
  console.log("SQL Statement:", query.sql);
});

// 监听 'query-response' 事件，获取查询结果
knex.on("query-response", (response, query) => {
  console.log("SQL Query Result Count:", response.length);
});

module.exports = knex;
