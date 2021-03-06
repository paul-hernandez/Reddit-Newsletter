import React from 'react';


function shuffle(a) {
  console.log("SHUFFLING");
  var b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

class Posts extends React.Component {



    render() {


    console.log('I was triggered during render')
      
      var isLoaded = this.props.isLoaded;
        
      if (!isLoaded) {
        return (<div/>)
      }

      var items = this.props.items;

      if (this.props.shuffled) {
        items = shuffle(items);
        } 
          return (
            <div>
              <h4 align='center'><strong>Sample feed: </strong></h4>
              <ol >
                {items.map((post, idx) => {
                  return (
                    <li className="card bg-secondary my-1" align="center" key={idx}>
                      <p>
                        <div className="card-header">
                        {post.subreddit}:
                        </div>
                         
                      <a href={post.url}>
                      {post.title}
                      <img src={post.url}
                            alt="nope"
                            onError={(e)=>{ e.target.onerror = null;
                            e.target.src="http://i.imgur.com/sdO8tAw.png";
                            e.target.width="30"; e.target.height="30";}}
                            width ="100px"
                            height = "100px"
                        />
                      </a>
                      </p>
                      </li>
                  );
                  })
                }
              </ol> 
              </div>
          );
    
}
}


export default Posts