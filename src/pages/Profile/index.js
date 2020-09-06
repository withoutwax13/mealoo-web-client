import React from 'react'
import { connect } from 'react-redux'

import NoAccess from '../NoAccess/index'

const Profile = (props) => {

	const { isClientHasAuth } = props

	if(isClientHasAuth){
		return (
			<div>
				Profile Page
			</div>
		)
	}else{
		return <NoAccess/>
	}
}

const mapStateToProps = ({ isClientHasAuth }) => {
	return {
		isClientHasAuth
	}
}

export default connect(mapStateToProps)(Profile)