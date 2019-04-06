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
    }

   
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search..." onChange={this.handleChange} />
                    <button>Search :)</button>
                </form>
            
            </div>
            
        )
    }
}

export default SearchBar