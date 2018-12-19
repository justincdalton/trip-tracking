const Koa = require('koa');
const logger = require('koa-logger');
const send = require('koa-send');
const Router = require('koa-router');
const render = require('./middleware/render');

const parseFile = require('./utils/parse-file');
const parseEntities = require('./utils/parse-entities');
const exportReport = require('./utils/export-report');

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(render);

const home = async (ctx) => {
  await ctx.render('home');
};

const report = async (ctx) => {
  const entities = await parseFile('src/input.txt');
  const drivers = parseEntities(entities);
  await exportReport.generate('src/report.txt', drivers);
  await send(ctx, 'src/report.txt');
};

router.get('/', home).get('/report', report);

app.use(router.routes());

app.listen(3000);
console.log('listening on port 3000');
