import React from 'react';
import './App.css';
import Posts from './components/Posts';
import SearchBar from './components/SearchBar';
import Options from './components/Options';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "undefined",
      isLoaded: false,
      items: [],
      searchHint: "Search...",
      shuffledBool: false,
    }
  }

  handleCheckmark = (e) => {
    this.setState({
      shuffledBool: !this.state.shuffledBool
    });
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
        for (var i = 0; i < 5; i++) {
            data.push({
              subreddit: json.data.children[i].data.subreddit,
              title: json.data.children[i].data.title,
              url: json.data.children[i].data.url,
            });

        }
        this.setState({
          isLoaded: true,
          items: this.state.items.concat(data),
          searchTerm: "",
        })
        
      })
      
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <p>Welcome to my app</p>
        <SearchBar searchWord={this.state.searchHint} newSearch={this.newSearch}/>
        <Options handleCheckmark={this.handleCheckmark}/>
        <Posts key={new Date().getTime()} isLoaded={this.state.isLoaded} items={this.state.items} shuffled={this.state.shuffledBool}  />
      </div>
    );
  }
}



export default App;
