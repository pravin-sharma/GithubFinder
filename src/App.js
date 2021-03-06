import React, { Component, Fragment } from 'react'
import axios from 'axios';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/about/About';
import User from './components/users/User';

class App extends Component {

  state = {
    users: [],
    user: {},
    isLoading: false,
    alert: null
  }

  //  static propTypes = {
  //   searchUser: PropTypes.func.isRequired,
  //   clearSearchResult: PropTypes.func.isRequired,
  //   showAlert: PropTypes.func.isRequired
  // }

  // Search User
  searchUser = async (text) => {
    this.setState({ isLoading: true });
    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: result.data.items, isLoading: false });
  }

  // Show a single User details using username/login name
  showUserInfo = async (username) => {
    this.setState({loading: true});
    const result = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(result.data);
    this.setState({user: result.data});
  }


  // Clear Search results
  clearSearchResult = () => {
    this.setState({ users: [] });
  }

  // Show Alert
  showAlert = ({ message, type }) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000)
  }


  render() {
    return (
      <Router>
        <div className="App" >
          < Navbar />
          <div className='container'>
            {this.state.alert && <Alert alert={this.state.alert} />}
            <Switch>
              <Route exact path='/' render={(props) => (
                <Fragment>
                  <Search
                    searchUser={this.searchUser}
                    clearSearchResult={this.clearSearchResult}
                    showClearButton={this.state.users.length > 0 ? true : false}
                    showAlert={this.showAlert}
                  />
                    <Users
                      users={this.state.users}
                      isLoading={this.state.isLoading}
                    />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route 
                exact path='/user/:login'
                render={props=>(  
                  <User   
                    {...props} 
                    showUserInfo={this.showUserInfo} 
                    user={this.state.user} 
                    isLoading={this.state.isLoading}
                  />
                )} 
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
