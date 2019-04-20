import React from 'react';
import './SearchBar.css';


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
        this.props.newSearch(this.state.searchWord, 5, 0);
        }
        this.setState({
            searchWord: null,
        });
        document.getElementById("search-input-box").reset();
    }

   
    render () {
        return (
            <div >
                <form id="search-input-box" onSubmit={this.handleSubmit}>
                    <div >
                        <div >
                        </div>
                        r/
                        <input 
                            type="text"
                            placeholder={this.props.searchWord} 
                            onChange ={this.handleChange}
                        />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
            
            
        )
    }
}

export default SearchBar