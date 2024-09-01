//src/common/config/index.js 
module.exports = {
    MySQLConfig: {
        client: "mysql2",
        connection: {
            host: "localhost",
            user: "root",
            password: "123690",
            database: "小程序",
        },
        pool: {
            // 连接池配置
            min: 0,
            max: 10,
        },
    },
};
