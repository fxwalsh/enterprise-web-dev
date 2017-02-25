import config from './config';
import apiRouter from './api';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});

server.use('/api', apiRouter);

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
