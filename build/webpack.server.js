var Express = require('express');
var webpack = require('webpack');
var config = require('../src/config.js');
var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);
var httpProxy =require('http-proxy');
var http = require( 'http');

var port = (config.port) || 3000;
var serverOptions = {
  contentBase: 'http://0.0.0.0' + ':' + port,
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true},
  headers: {'Access-Control-Allow-Origin': '*'}
};

var app = new Express();
var targetUrl = 'http://localhost:3030' ;
var server = new http.Server(app);
var proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

app.use('/ws', (req, res) => {
  proxy.web(req, res, {target: targetUrl + '/ws'});
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  let json;
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, {'content-type': 'application/json'});
  }

  json = {error: 'proxy_error', reason: error.message};
  res.end(JSON.stringify(json));
});
app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
