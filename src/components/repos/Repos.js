import React, {useContext} from 'react'
import ReposItem from './ReposItem'
import GithubContext from '../../context/github/githubContext'

function Repos() {
    
    const githubContext = useContext(GithubContext);

    const {repos} = githubContext;

    return (
        <div>
            {repos.map(repo=>{
                return <ReposItem key={repo.id} repoItem={repo}/>
            })}
        </div>
    )
}

export default Repos
