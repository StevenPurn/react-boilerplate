/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/mongo');

app.use(bodyParser.json());

app.use('/api/records', (req, res) => {
  if (req.method === 'POST') {
    db.addRecord(req.body)
    .then(() => {
      res.sendStatus(204);
      res.end();
    })
    .catch((err) => {
      res.status(400);
      res.end(err);
    });
  } else if (req.method === 'GET') {
    db.getRecords()
    .then((data) => {
      res.status(200);
      res.send(JSON.stringify(data));
      res.end();
    })
    .catch((err) => {
      res.sendStatus(400);
      res.end(err);
    });
  }
});

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
