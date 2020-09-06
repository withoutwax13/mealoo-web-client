import React, { useEffect } from 'react'
import { connect } from 'react-redux'

{/*This is only included to be part of the 'look' test and will not be a part of the real app logic*/}
import { selectMeal } from '../../modules/actions'

import Content from './Content/index'
import Head from './Head/index'

import { PageContainer } from './style'
import NoAccess from '../NoAccess/index'

const Meal = (props) => {

	const { mealName, mealData, selectMeal, isClientHasAuth } = props

	{/* For ui testing only, not the actual logic and argument passed to selectMeal action [yet the same process] */}
	useEffect(()=>{
		selectMeal('Milk And Strawberry')
	}, [])

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

export default connect(mapStateToProps, { selectMeal })(Meal)