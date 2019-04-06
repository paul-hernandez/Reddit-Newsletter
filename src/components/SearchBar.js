import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: null,
        }
    }

    handleChange = (e) => {
        this.setState({
            searchWord: e.target.value,
        });
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
                    <button>Search :)</button>
                </form>
            
            </div>
            
        )
    }
}

export default SearchBar