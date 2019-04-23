import React from 'react';
import PickTime from './PickTime';

class SubmitEmail extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <div style={{backgroundColor: "#fa5a20"}}>
                        <div >
                            <div>
                            <i className ="fas fa-book"/>
                            </div> Please enter your email and a
                            <br></br> time to recieve the daily feed.
                        </div>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            onChange ={this.props.updateEmail}
                        />
                        <br></br>
                        <PickTime updateTime={this.props.updateTime}/>
                        <br></br>
                    </div>
                </form>
        )
    }
}

export default SubmitEmail