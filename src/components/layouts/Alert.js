import React from 'react'
import PropTypes from 'prop-types'

const Alert=({alert})=> {
    return (
        <div className={`alert alert-${alert.type}`}>
            <i className='fa fa-info-circle'/> {alert.message}
        </div>
    )
}

Alert.propTypes = {
    alert: PropTypes.object.isRequired
}

export default Alert
