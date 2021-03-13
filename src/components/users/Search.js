import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () => {


    const [text, setText] = useState('');

   const githubContext = useContext(GithubContext); 
   const alertContext = useContext(AlertContext);

   const {users, searchUser, clearUsers} = githubContext;
   const {setAlert} = alertContext;

    // on search input change - update state
    const onChange = (event) => {
        setText(event.target.value)
    }

    // on search - prop up
    const onSearch = (event) => {
        event.preventDefault();

        if (text === '') {
            // set alert
            setAlert({ message: 'Please enter username', type: 'light' });
        } else {
            //pass as a prop to App.js and search in App.js
            searchUser(text);
            setText('');
        }
    }

    // clear search - prop up
    const clearUserFunction = () => {
        clearUsers();
    }

    return (
        <div>
            <form className="form" onSubmit={onSearch}>
                <input type="text" name="text" placeholder="Search User.." onChange={onChange} value={text} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
                { (users.length>0) && <button type="button" className="btn btn-light btn-block" onClick={clearUserFunction}>Clear</button>}
            </form>
        </div>
    )
}


export default Search