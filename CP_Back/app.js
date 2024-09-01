
const PORT = 567; // 用于设置端口号

const app=require('./src')

// 创建一个 GET /hello 路由

// 启动 Express 应用程序，监听在指定的端口上
app.listen(PORT, () => {
  // 在控制台输出服务器运行信息
  console.log(`Server is running at http://localhost:${PORT}`);
});
