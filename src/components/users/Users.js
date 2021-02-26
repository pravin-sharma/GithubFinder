import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {

    state = {
        users: [
            {
                "id": 1,
                "login": "pravin-sharma",
                "avatar_url": "https://avatars.githubusercontent.com/u/32671972?v=4",
                "html_url": "https://github.com/pravin-sharma",
            },
            {
                "id": 2,
                "login": "mavi888",
                "avatar_url": "https://avatars.githubusercontent.com/u/7993283?v=4",
                "html_url": "https://github.com/mavi888"
            },
            {
                "id": 3,
                "login": "andrewjmead",
                "avatar_url": "https://avatars.githubusercontent.com/u/2992789?v=4",
                "html_url": "https://github.com/andrewjmead",
            }
        ]
    }

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                )
                )}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
