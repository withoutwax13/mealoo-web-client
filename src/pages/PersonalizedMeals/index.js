import React from 'react'
import { connect } from 'react-redux'

import Head from './Head/index'
import Main from './Main/index'

import NoAccess from '../NoAccess/index'

import {
	Container
} from './style'

const PersonalizedMeals = (props) => {

	const { isClientHasAuth } = props

	if(isClientHasAuth){
		return (
			<Container>
				<Head/>
				<Main/>
			</Container>
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

export default connect(mapStateToProps)(PersonalizedMeals)