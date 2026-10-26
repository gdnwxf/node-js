// process 对象与命令行参数
// 运行：node examples/03-process-info.js apple banana

// 1. process.argv：命令行参数数组
//    [0] = node 可执行文件路径
//    [1] = 当前脚本路径
//    [2…] = 用户传入的参数
console.log("== process.argv ==");
console.log(process.argv);

// 取用户参数的惯用写法
const args = process.argv.slice(2);
console.log("用户参数:", args);

// 2. process.env：环境变量（配置注入的标准方式）
console.log("\n== 环境变量示例 ==");
console.log("NODE_ENV =", process.env.NODE_ENV ?? "(未设置)");
console.log("HOME =", process.env.HOME);

// 也可以在命令行临时注入：
//   NODE_ENV=dev node examples/03-process-info.js
// 代码里设置只影响当前进程：
process.env.MY_VAR = "hello";
console.log("代码内设置的 MY_VAR =", process.env.MY_VAR);

// 3. process.exit：以指定退出码结束进程（0 成功，非 0 失败）
if (args.includes("--check-exit")) {
  console.log("演示非零退出码，脚本将以 1 退出");
  process.exit(1);
}
console.log("\n正常结束，退出码为 0。可用 `echo $?` 验证。");
