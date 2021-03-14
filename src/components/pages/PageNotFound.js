import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p className='lead'>Unable to find the page you are looking for,
            <br/>
             please navigate to
            <Link to='/' style={{textDecoration: 'underline'}}> Home </Link> Page
            </p>
        </div>
    )
}

export default PageNotFound;
