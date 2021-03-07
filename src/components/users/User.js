import React, { Component } from 'react'
import Spinner from '../layouts/Spinner';

class User extends Component {

    componentDidMount() {
        this.props.showUserInfo(this.props.match.params.login);
    }

    render() {
        
        const {
            avatar_url,
            bio,
            blog,
            company,
            email,
            events_url,
            followers,
            followers_url,
            following,
            following_url,
            gists_url,
            gravatar_id,
            hireable,
            html_url,
            login,
            name,
            location,
            organizations_url,
            public_gists,
            public_repos,
            url
        } = this.props.user;
        

        const {isLoading} = this.props;
        if(isLoading){
            return <Spinner/>
        }else{
            return (
                <div>
                    {login}
                    
                </div>
            )
        }
        
    }
}

export default User
