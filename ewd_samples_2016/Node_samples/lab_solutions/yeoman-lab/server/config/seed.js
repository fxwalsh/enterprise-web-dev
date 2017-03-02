/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

var Post=require('../api/post/post.model');


    Post.find({}).remove(function() {
      Post.create(  {
        title : 'India - Tiger population sees 30% increase.',
        link:   'http://www.bbc.com/news/world-asia-30896028',
        username: 'jbloggs',
        comments : [],
        upvotes: 0
      },  {
        title : 'The button that is not.',
        link:   'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
        username: 'psmith',
        comments : [],
        upvotes: 0
      },  {
        title : 'Google Nears $1B Investment in SpaceX',
        link:   null,
        username: 'aoneill',
        comments : [],
        upvotes: 0
      },   {
        title : 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
        link:   'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
        username: 'jmarino',
        comments : [],
        upvotes: 0
      });
    });

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
