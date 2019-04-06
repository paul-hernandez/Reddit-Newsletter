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
      searchHint: "Search..."
    }
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
            data.push(<li>{json.data.children[i].data.subreddit} : <a href={json.data.children[i].data.url}>{json.data.children[i].data.title} </a>
              <a href={json.data.children[i].data.url}><img 
              onError={(e)=>{e.target.onerror = null;
                 e.target.src="http://i.imgur.com/sdO8tAw.png";
                e.target.width="30"; e.target.height="30";}}
              src={json.data.children[i].data.url}
              alt={json.data.children[i].data.title}
              width="500"
              height="600"
            /></a></li>);
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
        <Options/>
        <Posts isLoaded={this.state.isLoaded} items={this.state.items}  />
      </div>
    );
  }
}



export default App;
