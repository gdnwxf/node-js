// 全局对象练习
// 运行：node examples/02-global-objects.js

// 1. global / globalThis：Node 的全局命名空间（类似浏览器的 window）
console.log("== globalThis 顶层属性存在 global =", "global" in globalThis);

// 2. setTimeout / setInterval：浏览器同款定时器，Node 原生支持
console.log("定时器开始…");
setTimeout(() => {
  console.log("1 秒后执行的回调");
}, 1000);

// setImmediate：当前事件循环结束后立即执行（Node 特有）
setImmediate(() => {
  console.log("setImmediate：本轮轮询结束后执行");
});

// 3. __filename / __dirname：当前文件的绝对路径（CommonJS 模块内置变量）
console.log("当前文件:", __filename);
console.log("所在目录:", __dirname);

// 4. Buffer：处理二进制数据的基础类
const buf = Buffer.from("Node.js");
console.log("Buffer:", buf, "-> 还原:", buf.toString());

// 注意：下面这行会先于 setTimeout 打印——同步代码永远先跑完
console.log("同步代码结束（定时器回调还在排队）");
