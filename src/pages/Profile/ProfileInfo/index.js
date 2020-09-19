import React from 'react'
import PropTypes from 'prop-types'
import Profile from '..'

const ProfileInfo = (props) => {
    return (
        <div>
            Profile Info Component
        </div>
    )
}

ProfileInfo.propTypes = {
    profileData: PropTypes.object
}

export default ProfileInfo