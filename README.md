# koa2-online
这是一个使用koa2相关技术栈搭建的一个博客，将来要上线，用于作者个人文章、生活的记录

# 开发文档
## VSCode
在项目根目录，建.vscode/launch.json文件
```
{
    "version": "0.2.0",
    "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "like-debug",
          "program": "${workspaceFolder}/app.js",
          "runtimeExecutable": "node",
      }
    ]
}
```
## 浏览器
```
node --inspect app.js
nodemon --inspect app.js //实时更新
打开chrome调试工具 找到node绿色六边形图标
```
