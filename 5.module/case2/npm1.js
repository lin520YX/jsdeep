//第三方模块就是别人下好的  拖取下来
// npm init -y 包的描述符号
// 第三方 全局（-g）只能在命令行中使用 本地（--save（省略）/--save-dev）

// --save 项目依赖
// --save-dev 只是在开发的时候用
// @ 可以更新指定版本

// 开发时项目需要用到的最好 安装到本地
// npm install --project  只会安装开发依赖
// npm install --production 只会安装生产依赖
let mime = require('mime');

// 发布流程
// 1 先有账号 等到npm 上
// 2 推上去（检查名字）
// npm publish

// 模块管理器
// yarn