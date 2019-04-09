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
            <div>
                <form id="search-input-box" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder={this.props.searchWord} onChange={this.handleChange} />
                    <input type="text" placeholder={"Email"} onChange={this.handleEmailChange} />
                    <button>Search :)</button>
                </form>
            {this.state.searchWord}
            </div>
            
        )
    }
}

export default SearchBar