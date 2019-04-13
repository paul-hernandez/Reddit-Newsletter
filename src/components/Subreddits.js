import React from 'react'


class Subreddits extends React.Component {

    



    render () {

        if (this.props.SubsInfo.length === 0){ 
            return (
            <div>nothing</div>)
        } else {
            return (
                <ul> 
                {this.props.SubsInfo.map((post, id) => {
                    return (<li key={id}>{post.subredditName} : {post.count} <button onClick={(e) => {this.props.deleteSub(post.subredditName)}}>Delete</button></li>);
                })
                }
                <button onClick={() => this.handleClick("all")}>b</button>
                 </ul>
            )
        }
        
    }

}

export default Subreddits