const path = require('path')
const koa = require('koa2');
const cors = require('koa-cors'); // 解决跨域问题
const body = require('koa-body'); // 数据解析
const router = require('./routers/index'); // api url
const db = require('./db/db')
const { port, dbUrl } = require('./config')
const app = new koa();
//解决跨域问题会添加：'access-control-allow-origin': '*','access-control-allow-methods': 'GET,HEAD,PUT,POST,DELETE'
app.use(cors());

// 配置数据解析中间件
app.use(body())

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  console.log(ctx.request.path + ':' + ctx.request.method);
  await next();
});

app.use(router.routes()).use(router.allowedMethods()); // router.allowedMethods 目的是响应options请求和请求出错的处理

// 连接数据库
db.connect(dbUrl, { useNewUrlParser: true })

app.listen(port);
console.log(`the server started at port ${port}...`);