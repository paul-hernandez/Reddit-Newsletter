import React from 'react'
import Subreddit from './Subreddit'



class Subreddits extends React.Component {


    render () {

        if (this.props.SubsInfo.length === 0){ 
            return (
            <div>nothing</div>)
        } else {
            return (
                <div className="card card-body my-3">
                    <ul className="list-group my-5"> 
                    {this.props.SubsInfo.map((post, id) => {
                        return (<li key={id}>
                                
                                <Subreddit  deleteSub={this.props.deleteSub} post={post}/>
                                
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