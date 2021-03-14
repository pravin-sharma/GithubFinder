import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'


let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret= process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret= process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    }

    //useReducer is response for state management just like useState 
    //unlike useState, useReducer takes 2 paramter i.e reducer, state
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    const searchUser = async (text) => {
        setIsLoading();
        const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({
            type: SEARCH_USERS,
            payload: result.data.items
        });
    }

    //Get User
    const getUser = async (username) => {
        setIsLoading();
        const result = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({
            type: GET_USER,
            payload: result.data
        });
    }
    // Get Repos
    const getRepos = async (username) => {
        setIsLoading();
        const result = await axios.get(`https://api.github.com/users/${username}/repos?sort=created:asc&per_page=5&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({
            type: GET_REPOS,
            payload: result.data
        })
    }

    //Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    //Set isLoading
    const setIsLoading = () => dispatch({ type: SET_LOADING })


    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            isLoading: state.isLoading,
            alert: state.alert,
            searchUser,
            clearUsers,
            getUser,
            getRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;
