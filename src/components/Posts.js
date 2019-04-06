import React from 'react';


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class Posts extends React.Component {


  
    render() {

        var isLoaded = this.props.isLoaded;
        var items = this.props.items;
        items = shuffle(items);
        if (!isLoaded) {
          return <div><br/>Posts will appear here.</div>
        }

        
    
        return (
          <div>
            <h1 align='center'>feed: </h1>
            <ol>
            {items}
            
                  
                  
            </ol>
          </div>
          
        )
      }
}

export default Posts