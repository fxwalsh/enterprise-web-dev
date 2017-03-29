import config from './config';
import express from 'express';
import contactsRouter from './api/contacts';
import newsRouter from './api/news';
import body_parser from 'body-parser';
import mongoose from 'mongoose';
import {loadContacts} from './contactsData';
import {loadPosts} from './newsData';
import {Mockgoose} from 'mockgoose';
import {nodeEnv}  from './config';


export const server = express();

// Connect to database
if (nodeEnv == 'test'){
	var mockgoose = new Mockgoose(mongoose); 
	mockgoose.prepareStorage().then(function() {
  	mongoose.connect(config.mongoDb);
	});
} 
else
{
	mongoose.connect(config.mongoDb);
}

mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: '+ err);
    process.exit(-1);
});

// Populate DB with sample data
if(config.seedDb) { 
	loadContacts();
	loadPosts(); 
}

//configure body-parser
server.use(body_parser.json());
server.use(body_parser.urlencoded());
server.use('/api/contacts', contactsRouter);
server.use('/api/posts', newsRouter);
server.use(express.static('public'));

if (nodeEnv != 'test'){
server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
}