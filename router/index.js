const Router = require('koa-router');

const router = new Router()

function loadRouter(app) {
    router.get('/a', (ctx, next) => {
        ctx.body = 'aa'
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = loadRouter