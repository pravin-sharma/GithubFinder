import React, { Component } from 'react'
import axios from 'axios';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';



class App extends Component {

  state = {
    users: [],
    isLoading: false
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const result = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: result.data, isLoading: false });
  }

  searchUser = async (text) =>{
    this.setState({ isLoading: true });
    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: result.data.items, isLoading: false });
  } 

  render() {
    return (
      <div className="App" >
        < Navbar />

        <div className='container'>
          <Search searchUser={this.searchUser}/>
          <Users users={this.state.users} isLoading={this.state.isLoading} />
        </div>
      </div>
    );
  }
}

export default App;
