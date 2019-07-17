const logConfigure = {
  appenders: {
    outAppender: { type: 'stdout' },
    traceAppender: {
      type: 'dateFile',//日志类型
      filename: 'logs/log',//日志输出位置
      pattern: "yyyy-MM-dd.log",//后缀，每天创建一个新的日志文件
      alwaysIncludePattern: true,//是否总是有后缀名
    },
    errorAppender: {
      type: 'dateFile',
      filename: 'logs/err',
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
    }
  },
  categories: {
    // getLogger 参数为空时，默认使用该分类
    default: { appenders: ['outAppender'], level: 'all' },
    traceCategory: { appenders: ['outAppender', 'traceAppender'], level: 'info' },
    errorCategory: { appenders: ['outAppender', 'errorAppender'], level: 'error' },
  }
}
module.exports = logConfigure
