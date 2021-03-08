import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/about/About';
import User from './components/users/User';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // Search User
  const searchUserFunction = async (text) => {
    setIsLoading(true);

    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(result.data.items);
    setIsLoading(false);
  }

  // Show a single User details using username/login name
  const showUserInfoFunction = async (username) => {
    setIsLoading(true);

    const result = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(result.data);
    setUser(result.data);
    setIsLoading(false);
  }

  // Show a single User's Repos
  const showUserReposFunction = async (username) => {
    setIsLoading(true);
    const result = await axios.get(`https://api.github.com/users/${username}/repos?sort=created:asc&per_page=5&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //console.log(result.data);
    setRepos(result.data);
    setIsLoading(false);
  }


  // Clear Search results
  const clearSearchResultFunction = () => {
    setUsers([]);
  }

  // Show Alert
  const showAlert = ({ message, type }) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 4000)
  }

  return (
    <Router>
      <div className="App" >
        < Navbar />
        <div className='container'>
          {alert && <Alert alert={alert} />}
          <Switch>
            <Route exact path='/' render={(props) => (
              <Fragment>
                <Search
                  searchUser={searchUserFunction}
                  clearSearchResult={clearSearchResultFunction}

                  showClearButton={users.length > 0 ? true : false}
                  showAlert={showAlert}
                />
                <Users
                  users={users}
                  isLoading={isLoading}
                />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route
              exact path='/user/:login'
              render={props => (
                <User
                  {...props}
                  showUserInfo={showUserInfoFunction}
                  showUserRepos={showUserReposFunction}

                  user={user}
                  repos={repos}
                  isLoading={isLoading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );

}

export default App;
