import React from 'react'

function ReposItem({repoItem}) {
    console.log(repoItem.name);
    return (
        <div >
            <a href={repoItem.html_url} target="_blank" rel="noreferrer" className='btn btn-dark btn-block my-1 py-3'>{repoItem.name}</a> 
        </div>
    )
}

export default ReposItem
