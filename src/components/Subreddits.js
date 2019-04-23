import React from 'react'
import Subreddit from './Subreddit'
import SubmitEmail from './SubmitEmail'
import './Subreddits.css';

function generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

class Subreddits extends React.Component {

    state = {
        dense: false,
        secondary: false,
      };

    render () {


    const { classes } = this.props;
    const { dense, secondary } = this.state;


        if (this.props.SubsInfo.length === 0){ 
            return (
            <div></div>)

        
        } else {
            return (
                <div className="todoListMain"align="center">
            
                <SubmitEmail updateEmail={this.props.updateEmail} updateTime={this.props.updateTime}/>
                <button onClick={this.props.updateDatabase}>Recieve Daily Feed!</button>
                    <ul className="theList"> 
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