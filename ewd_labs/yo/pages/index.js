import React from 'react';
import {ReactServerAgent, RootElement, TheFold, logging} from 'react-server';
//import NetworkList from '../components/network-list';
import Header from '../components/header';
import Footer from '../components/footer';

import App from '../components/App'

//import '../node_modules/bootstrap/dist/css/bootstrap.css';


const logger = logging.getLogger(__LOGGER__);



export default class IndexPage {
	handleRoute(next) {
		logger.info('handling index route');
		this.data = ReactServerAgent.get('http://localhost:8081/api/posts').then(d => d.body);
		return next();
	}

	getTitle() {
		return 'Hacker News';
	}

	getHeadStylesheets() {
        return [
            "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        ]
    }


	getElements() {
		return [
			<RootElement key={0}>
				<Header/>
			</RootElement>,
			<RootElement when={this.data} key={1}>
				<App />
			</RootElement>,
			<TheFold key={2}/>,
			<RootElement key={3}>
				<Footer/>
			</RootElement>,
		];
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{name: 'description', content: 'Hacker News, powered by React Server'},
			{generator: 'React Server'},
			{keywords: 'React Server Hacker'},
		];
	}

	getBodyClasses() {
		return ['page-body'];
	}
}
