import React from 'react'

class Subreddit extends React.Component {


    render () {
        return(<div className="card card-body my-3 bg-secondary">
                {this.props.post.subredditName}
        <input type="text" placeHolder={this.props.post.count}/> 
        <button onClick={(e) => {this.props.deleteSub(this.props.post.subredditName)}}>Delete</button>
        <button >Edit</button>
        </div>)
    }
}

export default Subreddit