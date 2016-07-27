import Express from 'express';
import httpProxy from 'http-proxy';
import http from 'http';
import config from './config'
import favicon from 'serve-favicon';
import compression from 'compression';
import path from 'path';

const targetUrl = 'http://localhost:3030' ;
const app = new Express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'dist', 'favicon.ico')));

app.use(Express.static(path.join(__dirname, '..', 'dist')));
// Proxy to API server
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
server.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('----\n==> ✅  %s is running, talking to API server on %s.', config.app.title, config.apiPort);
  console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
});