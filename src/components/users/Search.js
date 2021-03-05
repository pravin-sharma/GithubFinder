import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {

    state = {
        text: '',
    };

    static propTypes = {
        showClearButton: PropTypes.bool.isRequired
    }

    // on search input change - update state
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }   

    // on search - prop up
    onSearch = (event) =>{
        event.preventDefault();

        if(this.state.text === ''){
            // show alert
            this.props.showAlert({message: 'Please enter username',type: 'light'});
        }else{
            //pass as a prop to App.js and search in App.js
            this.props.searchUser(this.state.text)
            this.setState({text: ''});
        }
    }

    // clear search - prop up
    clearSearchResult=()=>{
        this.props.clearSearchResult();
    }


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSearch}>
                <input type="text" name="text" placeholder="Search User.." onChange={this.onChange} value={this.state.text}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                {this.props.showClearButton && <button type="button" className="btn btn-light btn-block" onClick={this.clearSearchResult}>Clear</button>}
            </form>
            </div>
        )
    }
}

export default Search