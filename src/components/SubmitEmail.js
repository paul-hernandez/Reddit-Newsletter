import React from 'react';
import PickTime from './PickTime';

class SubmitEmail extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                            <i className ="fas fa-book"/>
                            </div>
                        </div>
                        <input 
                            type="text"
                            className="form-control" 
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