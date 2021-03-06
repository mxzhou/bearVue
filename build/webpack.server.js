var Express = require('express');
var webpack = require('webpack');
var config = require('../src/config.js');
var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);
var port = (config.port) || 3000;
var serverOptions = {
  contentBase: 'http://0.0.0.0' + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
