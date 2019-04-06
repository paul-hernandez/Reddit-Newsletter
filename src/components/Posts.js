import React from 'react';

class Posts extends React.Component {
    render() {

        var isLoaded = this.props.isLoaded;
        var items = this.props.items;
    
        if (!isLoaded) {
          return <div>Loading...</div>
        }

        var data = []

        for (var i = 0; i < 20; i++) {
            data.push(<li>{items.data.children[i].data.subreddit} : {items.data.children[i].data.title}</li>);
        }
    
        return (
          <div>
            <h1 align='center'>feed: </h1>
            <ol>
                asdf
            {data}
                  
                  
            </ol>
          </div>
          
        )
      }
}

export default Posts