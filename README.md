# Node.js 一周学习 · Day 1

> 目标：跑通环境，理解 Node 是什么，掌握全局对象与命令行参数。

## 今日清单

- [ ] 确认 Node 安装：`node -v`（本机已装 v24.14.0 ✅）
- [ ] 依次运行 `examples/` 下的 3 个示例，读懂每一行
- [ ] 用 REPL 交互练习：终端直接输入 `node`，试着算 `1+1`、定义变量、`.exit` 退出
- [ ] 独立完成 `homework/01-greet.js` 作业
- [ ] 用 `node --watch` 边改边看效果（Node 18+ 自带，无需 nodemon）

## 核心概念速记

| 概念 | 一句话解释 |
|------|-----------|
| Node.js | Chrome 的 V8 引擎 + 事件循环 + 系统能力（文件/网络），让 JS 跑在服务器端 |
| REPL | Read-Eval-Print-Loop，交互式解释器，终端输入 `node` 进入 |
| `process` | 全局对象，代表当前进程：`process.argv`（命令行参数）、`process.env`（环境变量） |
| CommonJS | Node 默认模块规范：`require()` 导入，`module.exports` 导出（Day 2 深入） |
| `--watch` | 文件变化自动重启脚本：`node --watch examples/01-hello.js` |

## 运行示例

```bash
node examples/01-hello.js
node examples/02-global-objects.js
node examples/03-process-info.js 参数一 参数二
```

## 作业（homework/01-greet.js）

命令行输入姓名，输出问候语。骨架已给，把 `TODO` 补全后运行：

```bash
node homework/01-greet.js 李雷
# 期望输出：你好，李雷！今天是 2025-xx-xx
```

验收标准：
1. 不传参数时打印用法提示并退出（退出码 1）
2. 正确读取 `process.argv` 中的姓名
3. 用 `Date` 格式化出当天日期（`YYYY-MM-DD`）
