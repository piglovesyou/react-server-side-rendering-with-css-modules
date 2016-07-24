import Path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
import sassMiddleware from 'node-sass-middleware';
import webpackDevMiddleware from "webpack-dev-middleware";
import webpack from "webpack";
import webpackConfig from '../webpack.config';
import expressReactViews from 'express-react-views';
import compression from 'compression';

const isProduction = process.env.NODE_ENV === 'production';
const app = express();

app.set('port', normalizePort(process.env.PORT || '3000'));
app.set('views', `${__dirname}/components`);
app.set('view engine', 'js');

app.engine('js', expressReactViews.createEngine({ transformViews: false }));
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

if (!isProduction) {
  app.use(sassMiddleware({
    src: Path.join(__dirname, './sass'),
    dest: Path.join(__dirname, '../public/stylesheets'),
    prefix: '/stylesheets',
    debug: true,
    indentedSyntax: true,
    sourceMap: true
  }));
  app.use(webpackDevMiddleware(webpack(Object.assign(webpackConfig, {
    output: { path: '/', filename: 'javascripts/main.js' }
  })), {}));
} else {
  app.use(compression());
}

app.use(express.static(Path.join(__dirname, '../public')));

app.get('/', async (req, res) => {
  res.render('index', {
    title: 'Express',
    messages: ['yeah!', 'baam!', 'baaa!']
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
