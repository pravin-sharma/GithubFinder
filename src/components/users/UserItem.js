import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem = (props) =>  {
        const { login, avatar_url } = props.user;
        return (
            <div className='card text-center'>
                <img src={avatar_url} alt={login} className='round-img ' style={{ width: '60px' }} />
                <h1>{login}</h1>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm'>More</Link>
            </div>
        )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}


export default UserItem
