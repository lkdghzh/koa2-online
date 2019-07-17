const serve = require('koa-static');
const staticConfig = serve('../tpls')
function loadStatic(app) {
    app.use(staticConfig)
}

module.exports = loadStatic