import React, { Component } from 'react'
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';


class App extends Component {

  state = {
    users: [],
    isLoading: false
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    const result = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: result.data, isLoading: false });

  }

  render() {
    return (
      <div className="App" >
        < Navbar />
        <div className='container'>
          <Users users={this.state.users} isLoading={this.state.isLoading} />
        </div>
      </div>
    );
  }

}

export default App;
