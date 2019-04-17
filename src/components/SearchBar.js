import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: null,
            email: null,
        }
    }

    handleChange = (e) => {
        this.setState({
            searchWord: e.target.value,
        });
    }

    handleEmailChange = (e) => {
        this.props.updateEmail(e);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchWord) {
        this.props.newSearch(this.state.searchWord);
        }
        this.setState({
            searchWord: null,
        });
        document.getElementById("search-input-box").reset();
    }

   
    render () {
        return (
            <div className="card card-body my-3">
                <form id="search-input-box" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                            <i className ="fas fa-book"/>
                            </div>
                        </div>
                        <input 
                            type="text"
                            className="form-control" 
                            placeholder={this.props.searchWord} 
                            onChange ={this.handleChange}
                        />
                        <input 
                            type="text"
                            className="form-control" 
                            placeholder="Email" 
                            onChange ={this.handleEmailChange}
                        />
                    </div>
                    <button className="btn btn-block btn-primary mt-3" type="submit">Search</button>
                </form>
            </div>
            
            
        )
    }
}

export default SearchBar