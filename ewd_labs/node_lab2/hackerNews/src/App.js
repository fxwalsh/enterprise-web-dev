import React from 'react';
import _ from 'lodash';
import * as api from './api';
import { Link } from 'react-router';

    var Form = React.createClass({
       getInitialState: function() {
           return { title: '', link: ''};
        },
        handleTitleChange: function(e) {
             this.setState({title : e.target.value});
         },
         handleLinkChange: function(e) {
              this.setState({link : e.target.value});
          },
          onSubmit : function(e) {
               e.preventDefault();
               console.log("adding link");
               var title = this.state.title.trim();
               var link = this.state.link.trim();
               if (!title || !link ) {
                   return;
               }
               this.props.addHandler(title ,link );

               this.setState({comment: '', name: ''});
          },
        render : function() {
           return (
             <form style={{marginTop: '30px'}}>
                <h3>Add a new post</h3>
                <div className="form-group">
                  <input type="text"
                    className="form-control" placeholder="Title"
                    value={this.state.title} onChange={this.handleTitleChange} ></input>
                </div>
                <div className="form-group">
                  <input type="text"
                     className="form-control" placeholder="Link"
                     value={this.state.link} onChange={this.handleLinkChange} ></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Post</button>
              </form>
            );
          }
       });

    var NewsItem = React.createClass({
        handleVote : function() {
          this.props.upvoteHandler(this.props.post.id);
        },
        render : function() {
            var lineStyle = {
                 fontSize: '20px', marginLeft: '10px'  };
            var cursor = { cursor: 'pointer' } ;
            var line ;
            if (this.props.post.link ) {
               line = <a href={this.props.post.link} >
                            {this.props.post.title} </a> ;
            } else {
               line = <span>{this.props.post.title} </span> ;
            }
            return (
              <div >
                <span className="glyphicon glyphicon-thumbs-up"
                    style={cursor}
                    onClick={this.handleVote} ></span>
                {this.props.post.upvotes}
                <span style={lineStyle} >
                    {line}
                    <span>
                      <Link to={'/posts/' + this.props.post.id }>Comments</Link>
                    </span>
                </span>
              </div>
        );
        }
       }) ;

    var NewsList = React.createClass({
        render : function() {
          var items = this.props.posts.map(function(post,index) {
             return <NewsItem key={index} post={post}
                        upvoteHandler={this.props.upvoteHandler}  /> ;
            }.bind(this) )
          return (
            <div>
                  {items}
            </div>
            );
        }
    }) ;

    var HackerApp = React.createClass({

    getInitialState: function() {
           return {posts: [{}]};
            },

     componentDidMount: function(){
       api.getAll().then(resp => {
              this.setState({
                posts: resp.posts
 });
}).catch(console.error);
        },

        incrementUpvote : function(id)  {
          api.upvote(id).then(resp=> {
                var upvotedPost = _.find(this.state.posts, function(post){return post.id == id;});
                upvotedPost.upvotes++;
                this.setState({});
              });

        },
        addPost : function(title,link) {
          api.add(title,link)
          .then(resp => {
            const newPost = {"id":resp.id,"title":title,"link":link,"upvotes":0, "comments":[]};
            this.setState({posts: this.state.posts.concat([newPost])});
          })
        },
        render: function(){
            const posts = _.sortBy(this.state.posts, post =>
                  post.upvotes);
            return (
              <div >
               <NewsList posts={posts}
                    upvoteHandler={this.incrementUpvote} />
               <Form addHandler={this.addPost} />
             </div>

            );
        }
    });

    export default HackerApp;
