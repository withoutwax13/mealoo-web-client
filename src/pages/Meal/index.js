import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Content from './Content/index'
import Head from './Head/index'

import { PageContainer } from './style'
import NoAccess from '../NoAccess/index'

const Meal = (props) => {

	const { mealName, mealData, isClientHasAuth } = props

	if(isClientHasAuth){
		if(mealData){
			return (
				<PageContainer>
					<Head mealName={mealName}/>
					<Content mealData={mealData}/>
				</PageContainer>
			)
		}else{
			return <h2>Loading</h2>
		}
	}else{
		return <NoAccess/>
	}
}



const mapStateToProps = ({ selectedMeal, isClientHasAuth }) => {
	return {
		mealName: selectedMeal.mealName,
		mealData: selectedMeal.mealData,
		isClientHasAuth: isClientHasAuth
	}
}

export default connect(mapStateToProps)(Meal)