import React from 'react'

function ReposItem({repoItem}) {
    console.log(repoItem.name);
    return (
        <div className='card'>
            <a href={repoItem.html_url} target="_blank" rel="noreferrer">{repoItem.name}</a> 
        </div>
    )
}

export default ReposItem
