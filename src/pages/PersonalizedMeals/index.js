import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchSuggestedMealSet } from '../../modules/actions'

import Head from './Head/index'
import Main from './Main/index'

import NoAccess from '../NoAccess/index'

import {
	Container
} from './style'

const PersonalizedMeals = (props) => {

	const { isClientHasAuth, suggestedMealSet, fetchSuggestedMealSet } = props

	if(isClientHasAuth){
		
		useEffect(()=>{
			fetchSuggestedMealSet()
		}, [])

		if(suggestedMealSet){
			return (
				<Container>
					<Head/>
					<Main setData={suggestedMealSet}/>
				</Container>
			)
		}else{
			return <h1>Loading</h1>
		}
	}else{
		return <NoAccess/>
	}
}

PersonalizedMeals.propTypes = {
	isClientHasAuth: PropTypes.bool,
	suggestedMealSet: PropTypes.array,
	fetchSuggestedMealSet: PropTypes.func
}

const mapStateToProps = ({ isClientHasAuth, suggestedMealSet }) => {
	return {
		isClientHasAuth,
		suggestedMealSet
	}
}

export default connect(mapStateToProps, { fetchSuggestedMealSet })(PersonalizedMeals)