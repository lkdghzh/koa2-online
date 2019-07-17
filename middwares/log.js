var log4js = require('log4js')
const { logConfigure } = require('../config/index')
log4js.configure(logConfigure)

// let defaultlogger = log4js.getLogger();
let tracelogger = log4js.getLogger('traceCategory');
let errorLogger = log4js.getLogger('errorCategory');

const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"];
function initLog(app) {
  app.use(function(ctx,next){
    // 所有方法挂载到上下文
    ctx.err={}
    methods.forEach(method => {
        ctx[method] = (message) => {
          tracelogger[method](message)
        }
        ctx.err[method] = (message) => {
          errorLogger[method](message)
        }
    });
    const start = Date.now();
    next()
    const responseTime = Date.now() - start;
    ctx.info(`响应时间${responseTime}`)
    ctx.err.error(`响应时间${responseTime}`)
  })
}
module.exports = initLog
