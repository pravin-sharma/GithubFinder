import React from 'react'
import ReposItem from './ReposItem'

function Repos({repos}) {
    //console.log(repos)
    return (
        <div>
            {repos.map(repo=>{
                return <ReposItem key={repo.id} repoItem={repo}/>
            })}
        </div>
    )
}

export default Repos
