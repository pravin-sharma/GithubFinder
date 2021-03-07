import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ showAlert, searchUser, clearSearchResult, showClearButton }) => {


    const [text, setText] = useState('');

    // on search input change - update state
    const onChange = (event) => {
        setText(event.target.value)
    }

    // on search - prop up
    const onSearch = (event) => {
        event.preventDefault();

        if (text === '') {
            // show alert
            showAlert({ message: 'Please enter username', type: 'light' });
        } else {
            //pass as a prop to App.js and search in App.js
            searchUser(text);
            setText('');
        }
    }

    // clear search - prop up
    const clearSearch = () => {
        clearSearchResult();
    }

    return (
        <div>
            <form className="form" onSubmit={onSearch}>
                <input type="text" name="text" placeholder="Search User.." onChange={onChange} value={text} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
                {showClearButton && <button type="button" className="btn btn-light btn-block" onClick={clearSearch}>Clear</button>}
            </form>
        </div>
    )
}

Search.propTypes = {
    showClearButton: PropTypes.bool.isRequired
}

export default Search