/**
 * Day 1 作业：命令行问候脚本
 *
 * 运行：node homework/01-greet.js <姓名>
 * 期望输出：你好，<姓名>！今天是 YYYY-MM-DD
 *
 * 验收标准：
 *   1. 不传参数时打印用法提示，以退出码 1 结束
 *   2. 从 process.argv 读取姓名
 *   3. 用 Date 格式化当天日期为 YYYY-MM-DD
 */

function getGreetingDate() {
  const now = new Date();
  // TODO: 把 now 格式化为 "YYYY-MM-DD" 字符串并返回
  // 提示：getFullYear() / getMonth()（注意 0 起始）/ getDate()
  //       月、日不足两位要补零，可用 String.prototype.padStart(2, "0")
  return "TODO-YYYY-MM-DD";
}

function main() {
  const args = process.argv.slice(2);

  // TODO 1: args 为空时，打印用法提示
  //         并调用 process.exit(1) 以失败状态退出
  if (false) {
  }

  const name = args[0];

  // TODO 2: 打印 "你好，<name>！今天是 <日期>"
  console.log("TODO");
}

main();
