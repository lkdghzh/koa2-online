const Koa = require('koa');

const { initStatic, initLog } = require('./middwares')
const initRouter = require('./router')

const app = new Koa();

initLog(app)
initStatic(app)
initRouter(app)

app.listen(8003);
