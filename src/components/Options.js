import React from 'react'

class Options extends React.Component {

    
    render () {
        return(
            <div> <br />
                <h4>Options</h4>
                <input
                type="checkbox"
                name="Howdy"
                label="yoo"
                onChange={this.props.handleCheckmark}
                >
                
                
                </input>
            </div>
        )
    }
}

export default Options