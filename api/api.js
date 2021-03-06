import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import config from '../src/config'
import http from 'http';
import address from './routes/address'
import routes from './routes/index'
import home from './routes/home'
import recharge from './routes/recharge'
import open from './routes/open'
import share from './routes/share'

const app = express();

app.use(session({
  secret: 'bearVue rule!!!!',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));
app.use(bodyParser.json());
app.use('/', address);
app.use('/', routes);
app.use('/', home);
app.use('/', recharge);
app.use('/', share);

// 最新揭晓
app.use('/', open);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
app.listen(config.apiPort, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
  console.info('==> 💻  Send requests to http://%s:%s', config.apiHost, config.apiPort);
});