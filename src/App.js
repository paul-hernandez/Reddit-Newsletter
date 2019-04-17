import React from 'react';
import './App.css';
import Posts from './components/Posts';
import SearchBar from './components/SearchBar';
import Options from './components/Options';
import * as firebase from 'firebase';
import Subreddits from './components/Subreddits';

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "undefined",
      isLoaded: false,
      items: [],
      searchHint: "Search...",
      shuffledBool: false,
      SubsInfo: [],
      email: "",
    }
  }
  updateEmail = (e) => {
    console.log("Email updated")
    this.setState({
      email: e.target.value,
    })

  }


  deleteSubreddit = (e) => {
    var index = this.state.SubsInfo.findIndex(x => x.subredditName === e);
    if (index !== -1) {
      var temp = this.state.SubsInfo;
      var counter = 0;
      for (var i = 0; i < index; i++) {
        console.log(this.state.SubsInfo[i].count);
        counter += this.state.SubsInfo[i].count;
      }
      console.log("starting", counter);
      var tempItems = this.state.items;
      tempItems.splice(counter,this.state.SubsInfo[index].count);
      temp.splice(index,1)
      this.setState({
        items: tempItems,
        SubsInfo: temp,
      })
      
    }  
    }
  
  handleCheckmark = (e) => {
    this.setState({
      shuffledBool: !this.state.shuffledBool
    });
  }

  uploadToDatabase = () => {
    const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
    const userRef = db.collection('users').add({
      email: this.state.email,
      subreddits: this.state.SubsInfo
    });  
    alert(this.state.email);
  }


  newSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
      searchHint: "Search again...",
    });
    fetch('https://www.reddit.com/r/' + searchTerm + '/.json')
      .then(res => res.json())
      .then(json => {
        var data = []
        for (var i = 2; i < 7; i++) {
            data.push({
              subreddit: json.data.children[i].data.subreddit,
              title: json.data.children[i].data.title,
              url: json.data.children[i].data.url,
  
            });

        }
        var SubInfo = {
          subredditName: searchTerm,
          count: 5,
        }
        this.setState({
          isLoaded: true,
          items: this.state.items.concat(data),
          searchTerm: "",
          SubsInfo: this.state.SubsInfo.concat(SubInfo),

        })
        
      })
      
  }

  render() {

 

    
    return (
      <div className="App">
        <header className="App-header">
          Newsletter
        </header>
        <p>Your favorite subreddits delivered daily</p>
        <SearchBar searchWord={this.state.searchHint} newSearch={this.newSearch} updateEmail={this.updateEmail}/>
        <button onClick={this.uploadToDatabase}>Submit All</button>
        <Options handleCheckmark={this.handleCheckmark} />
        <Subreddits className="Subreddit-list"  SubsInfo={this.state.SubsInfo} deleteSub={this.deleteSubreddit}/>
        <Posts key={new Date().getTime()} isLoaded={this.state.isLoaded} items={this.state.items} shuffled={this.state.shuffledBool}  />
        


      </div>
    );
  }
}



export default App;
