import React from 'react';
import PickTime from './PickTime';

class SubmitEmail extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <div >
                        <div >
                            <div>
                            <i className ="fas fa-book"/>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            onChange ={this.props.updateEmail}
                        />
                        <PickTime updateTime={this.props.updateTime}/>
                    </div>
                </form>
        )
    }
}

export default SubmitEmail