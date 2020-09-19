import React from 'react'
import { connect } from 'react-redux'

import {
	PageContainer,
	SectionContainer
} from './style'
import ProfileInfo from './ProfileInfo/index'
import FoodDiary from './FoodDiary/index'
import NoAccess from '../NoAccess/index'

	{/*
		#Expected Prop Data from API call to /users/{username} fetch

		- email: string
		- id: integer
		- mealooUserDetails: object
			- age: integer
			- height: integer [defaul unit: cm]
			- physicalActivity: string/enum
			- sex: enum/string
			- weight: integer
		- mealooUserRole: string/enum
		- nutritionSettings: object
			- dailyCaloricGoal: integer
		- username: string
		- password: string
	*/}

	{/*
		Component Plan:

		# ProfileInfo Component
			props: 
				- content of /users/{username} call
			render:
				- displayed and editable fields of the props
				- calculated BMI using the users/{username}/calculate call

		# FoodDiary Component
			props: 
				- content of client/{username}/diaries fetch call
			render:
				- props data visualization [like a diary]
	*/}

const Profile = (props) => {

	const { isClientHasAuth } = props

	if(isClientHasAuth){
		return (
			<PageContainer>
				<SectionContainer>
					<ProfileInfo/>
				</SectionContainer>
				<SectionContainer>
					<FoodDiary/>
				</SectionContainer>
			</PageContainer>
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