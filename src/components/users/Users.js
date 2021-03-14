import React,{useContext} from 'react'

import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import GithubContext from '../../context/github/githubContext';

const Users = () => {

    const githubContext = useContext(GithubContext);

    const {isLoading, users} = githubContext;

    if (isLoading) {
        return <Spinner />
    } else {
        return (
            <div className="usersGrid">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                )
                )}
            </div>
        )
    }

}

// const usersGrid = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '1rem'
// }

export default Users
