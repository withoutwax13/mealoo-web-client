import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Content from './Content/index'
import Head from './Head/index'

import { PageContainer } from './style'
import NoAccess from '../NoAccess/index'

const Meal = (props) => {

	const { mealName, mealData, isClientHasAuth, isFetching } = props

	if(isFetching){
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
	}else{
		return <Redirect to='/set'/>
	}
}



const mapStateToProps = ({ selectedMeal, isClientHasAuth, isFetchingMeal }) => {
	return {
		mealName: selectedMeal.mealName,
		mealData: selectedMeal.mealData,
		isFetching: isFetchingMeal,
		isClientHasAuth: isClientHasAuth
	}
}

export default connect(mapStateToProps)(Meal)