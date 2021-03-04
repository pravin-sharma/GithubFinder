import React, { Component } from 'react'

export class Search extends Component {

    state = {
        text: '',
    };

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }   

    onSubmit = (event) =>{
        event.preventDefault();
        //pass as a prop to App.js and search in App.js
        this.props.searchUser(this.state.text)
        this.setState({text: ''});
    }

    clearSearchResult=()=>{
        this.props.clearSearchResult();
    }


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                <input type="text" name="text" placeholder="Search User.." onChange={this.onChange} value={this.state.text}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                {this.props.showClearButton && <button type="button" className="btn btn-light btn-block" onClick={this.clearSearchResult}>Clear</button>}
            </form>
            </div>
        )
    }
}

export default Search