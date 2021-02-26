import React, { Component } from 'react'

class UserItem extends Component {
    render() {
        const { login, avatar_url, html_url } = this.props.user;
        return (
            <div className='card text-center'>
                <img src={avatar_url} alt={login} className='round-img ' style={{ width: '60px' }} />
                <h1>{login}</h1>
                <a href={html_url} className='btn btn-dark btn-sm'>More</a>
            </div>
        )
    }
}

export default UserItem
