import React from 'react';
import './App.css';
import Posts from './components/Posts';
import SearchBar from './components/SearchBar';
import SubmitEmail from './components/SubmitEmail';
import Options from './components/Options';
import * as firebase from 'firebase';
import Subreddits from './components/Subreddits';



import "bootstrap/dist/css/bootstrap.min.css";

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
      time: "12:00",
    }
  }
  updateEmail = (e) => {
    console.log("Email updated")
    this.setState({
      email: e.target.value,
    })

  }

  updateTime = (timeString) => {
    console.log("Time updated")
    this.setState({
      time: timeString,
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

  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

  uploadToDatabase = () => {
    if (this.validateEmail(this.state.email) === false) {
      alert("Please type in a valid email address");
      return;
    }

    const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
    //const userRef = 
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          if (doc.data().email === this.state.email) {
            alert("in database :o, deleting...")
            db.collection("users").doc(doc.id).delete().then(function() {
              console.log("Document successfully deleted!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
          }
      });
      db.collection('users').add({
        email: this.state.email,
        time: this.state.time,
        subreddits: this.state.SubsInfo
      });  
      alert(this.state.email);
  });
  
    
  }


  editSubreddit = (e) => {
    var temp = this.state.SubsInfo;
    for (var i=0; i < temp.length; i++){
      if (temp[i].subredditName === e) {
        temp[i].edit = true;
      }
    }
    this.setState({
      SubsInfo: temp,
    });
  }

  saveSubreddit = (subName, newCount, newOffset) => {
    if (newCount + newOffset > 25){
      alert("Error: Try a lower number of posts and/or offset.");
      return;
    }
    console.log(subName)
    console.log(newCount);
    console.log(newOffset);
    this.deleteSubreddit(subName);
    this.newSearch(subName, newCount, newOffset);
    // var temp = this.state.SubsInfo;
    // for (var i=0; i < temp.length; i++){
    //   if (temp[i].subredditName === subName) {
    //     temp[i].count = newCount;
    //     temp[i].offset = newOffset;
    //     temp[i].edit = false;
    //   }
    // }
    // this.setState({
    //   SubsInfo: temp,
    // });
  }

  newSearch = (searchTerm, numPosts, offset) => {

    for (var i = 0; i < this.state.SubsInfo.length; i++) {
      if (this.state.SubsInfo[i].subredditName.toLowerCase() === searchTerm.toLowerCase()) {
        alert ("That subreddit was already added to your list.");
        return;
      }
    }
    
    console.log("offset:", offset);
    console.log("numposts:",numPosts);
    this.setState({
      searchTerm: searchTerm,
      searchHint: "Search again...",
    });
    fetch('https://www.reddit.com/r/' + searchTerm + '/.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong.');
        }
      })
      .then(json => {
        
        if (json.data.children[1] === undefined) {
          alert("That subreddit does not exist :( please try again");
          return;
        }

        var data = []
        for (var i = offset; i < (numPosts + offset); i++) {
            data.push({
              subreddit: json.data.children[i].data.subreddit,
              title: json.data.children[i].data.title,
              url: json.data.children[i].data.url,
  
            });

        }
        var SubInfo = {
          subredditName: searchTerm,
          count: numPosts,
          offset: offset, 
          edit: false,
          
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
          R-DAILY
        </header>
        <p>Your favorite /r/'s delivered daily. </p>
        <SearchBar searchWord={this.state.searchHint} newSearch={this.newSearch}/>
        
        <Subreddits className="Subreddit-list"
          SubsInfo={this.state.SubsInfo}
          deleteSub={this.deleteSubreddit} 
          editSub={this.editSubreddit}
          saveSub={this.saveSubreddit}
          updateEmail={this.updateEmail}
          updateTime={this.updateTime}
          updateDatabase={this.uploadToDatabase}
          />
        <Posts key={new Date().getTime()} isLoaded={this.state.isLoaded} items={this.state.items} shuffled={this.state.shuffledBool}  />
        


      </div>
    );
  }
}



export default App;
