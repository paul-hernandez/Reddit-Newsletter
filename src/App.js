import React from 'react';
import './App.css';
import Posts from './components/Posts';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "undefined",
      isLoaded: false,
      items: [],
    }
  }


  newSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
    });
    fetch('https://www.reddit.com/r/' + searchTerm + '/.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <p>Welcome to my app</p>
        <SearchBar newSearch={this.newSearch}/>
        <Posts isLoaded={this.state.isLoaded} items={this.state.items}  />
        hello
      </div>
    );
  }
}



export default App;
