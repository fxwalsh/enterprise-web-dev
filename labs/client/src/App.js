import React from 'react';
import request from 'superagent'; 
 
class FriendListItem extends React.Component {
    render() {
         return (
           <li> 
              <h2>{this.props.friend.name}</h2> 
               <a href={'mailto:'+this.props.friend.email}>
                     {this.props.friend.email} </a>
            </li>
           )
    }
};

class SearchBox extends React.Component {
  constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this) ;
   }  
   onChange(event) {
         event.preventDefault() ;
         var newText = event.target.value.toLowerCase() ;
         this.props.handleChange(newText) ;
    }
     render() {
        return (
             <div>
              <input type="text" placeholder="Search" value={this.props.text}
                  onChange={this.onChange} />
            </div>
          )
    }
} ;

class FriendList extends React.Component {
    shouldComponentUpdate(nextProps,nextState) {
        if (this.props.list.length === nextProps.list.length ) {
          return false ;
        } else {
          return true ;
        }     
    }
    render() {
        let items = this.props.list.map(item => {
               return <FriendListItem key={item.email} friend={item} />
           });
        return (
          <ul>
             {items}
           </ul>
          )
    }
};

class FilteredFriends extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
           searchText : ''
        }; 
      this.filterFriends = this.filterFriends.bind(this) ;     
   }    
   componentDidMount() {
         request.get('http://localhost:3000/friends')
            .end(function(error, response){
              if (response) {
                let json = JSON.parse(response.text);
                localStorage.clear();
                localStorage.setItem('friends', JSON.stringify(json)) ;
                this.setState({}) ; 
              } else {
                console.log(error );
              }
            }.bind(this)); 
    }
    filterFriends(text) {
        this.setState({searchText : text});
    }
    render(){
        let updatedList = localStorage.getItem('friends') ?
                  JSON.parse(localStorage.getItem('friends')) : [] ;
         updatedList = updatedList.filter(item => {
               return item.name.toLowerCase().search(
                   this.state.searchText) !== -1 ;                
         });
        return (
          <div>
             <h1>Friends List</h1>
              <SearchBox text={this.state.searchText} handleChange={this.filterFriends} />
             <FriendList list={updatedList} />
          </div>
        );
    }
};

export default FilteredFriends;