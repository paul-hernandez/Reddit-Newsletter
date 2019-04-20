import React from 'react'
import Subreddit from './Subreddit'
import SubmitEmail from './SubmitEmail'



class Subreddits extends React.Component {


    render () {

        if (this.props.SubsInfo.length === 0){ 
            return (
            <div>nothing</div>)

        
        } else {
            return (
                <div className="card card-body my-3">
                <SubmitEmail updateEmail={this.props.updateEmail} updateTime={this.props.updateTime}/>
                <button onClick={this.props.updateDatabase}>Submit All</button>
                    <ul className="list-group my-5"> 
                    {this.props.SubsInfo.map((post, id) => {
                        return (<li key={id}>
                                <Subreddit
                                    post={post}
                                    deleteSub={this.props.deleteSub} 
                                    editSub={this.props.editSub} 
                                    saveSub={this.props.saveSub}
                                    />
                                </li>);
                    })
                    }
                    </ul>
                </div>
                 
            )
        }
        
    }

}

export default Subreddits