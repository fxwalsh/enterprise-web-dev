import config from './config';
import express from 'express';
import contactsRouter from './api/contacts';
import newsRouter from './api/news';
import body_parser from 'body-parser';

const server = express();

//configure body-parser
server.use(body_parser.json());
server.use(body_parser.urlencoded());
server.use('/api/contacts', contactsRouter);
server.use('/api/posts', newsRouter);
server.use(express.static('public'));



server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
