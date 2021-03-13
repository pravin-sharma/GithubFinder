import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layouts/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {

    const githubContext = useContext(GithubContext);

    const { getUser, getRepos, isLoading, user} = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getRepos(match.params.login);
        // eslint-disable-next-line
    }, [])

    const {
        avatar_url,
        bio,
        company,
        followers,
        following,
        hireable,
        html_url,
        name,
        location,
        public_gists,
        public_repos,
    } = user;

    if (isLoading) {
        return <Spinner />
    } else {
        return (
            <div>
                <div>
                    <Link to='/' className="btn btn-light">Back to Search</Link>
                        Hireable: {hireable ? <i className="fas fa-check-circle text-success" /> : <i className="fas fa-times-circle text-danger" />}
                </div>
                <div className="card grid-2">
                    <img src={avatar_url} alt={`${name}`} className="round-img" style={{ width: '150px', margin: 'auto' }} />
                    <div>
                        <h3>{name}</h3>
                        <p>{bio}</p>
                        <strong>Company: </strong>{company}<br />
                        <strong>Location: </strong>{location}<br />
                        <a href={html_url} target='_blank' rel="noreferrer" className="btn btn-dark my-1">Github Profile</a>
                    </div>
                </div>
                <div className="text-center my-1">
                    <div className="badge badge-success">Followers: {followers}</div>
                    <div className="badge badge-primary">Following: {following}</div>
                    <div className="badge badge-dark">Public Repos: {public_repos}</div>
                    <div className="badge badge-light">Public Gist: {public_gists}</div>
                </div>
                <Repos />
            </div>
        )
    }
}

User.propTypes = {
    match: PropTypes.object.isRequired
}

export default User
