const koaStatic = require('koa-static');
const path=require('path')

const root=path.join(__dirname,'../tpls')
const serve = koaStatic(root)

function loadStatic(app) {
    app.use(serve)
}

module.exports = loadStatic
