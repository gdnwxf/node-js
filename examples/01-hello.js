// 第一个 Node.js 程序
// 运行：node examples/01-hello.js

// console 是全局对象，无需 require
console.log("Hello, Node.js!");

// 模板字符串拼接变量
const name = "Node";
console.log(`你好，${name}！`);

// console.error 输出到 stderr（错误流）
console.error("这行走的是错误流，但不代表程序出错");

// 多行内容格式化输出
console.log("版本信息:", {
  node: process.version,
  platform: process.platform,
});
