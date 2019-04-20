import React from 'react'

class Subreddit extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            count:this.props.post.count,
            offset: 0,
        }
    }

    updateCount = (e) => {
        this.setState({
            count: parseInt(e.target.value),
        });
        console.log("changed to", e.target.value);
    }

    updateOffset = (e) => {
        this.setState({
            offset: parseInt(e.target.value),
        });

        console.log("changed to", e.target.value);
    }

    saveSubreddit = (e) => {
        //TODO: check if values are valid
        this.props.saveSub(this.props.post.subredditName, this.state.count,this.state.offset);
    }
    

    
    render () {

        if (this.props.post.edit === true) {
            return (<div className="card card-body my-3 bg-info">
            {this.props.post.subredditName}
    <input type="text" placeHolder={this.props.post.count} onChange={this.updateCount}/> 
    <input type="text" placeHolder={this.props.post.offset} onChange={this.updateOffset}/> 
    <button onClick={(e) => {this.props.deleteSub(this.props.post.subredditName)}}>Delete</button>
    <button onClick={this.saveSubreddit}>Save </button>
    </div>)
        } else {
        return(<div className="card card-body my-3 bg-secondary">
                {this.props.post.subredditName}
        <p>{this.props.post.count}</p>
        <p>{this.props.post.offset}</p>
        <button onClick={(e) => {this.props.deleteSub(this.props.post.subredditName)}}>Delete</button>
        <button onClick={(e) => {this.props.editSub(this.props.post.subredditName)}}>Edit </button>
        </div>)
        }
    }
}

export default Subreddit