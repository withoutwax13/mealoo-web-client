import { combineReducers } from 'redux'

const isLocationLandingPage_Reducer = (state = null, action) => {
	if(action.type === 'TOGGLE_IS_CURRENT_LANDING_PAGE'){
		return action.payload
	}
	return state
}

const selectedMeal_Reducer = (state = { mealName: '', mealData: {} }, action) => {
	if(action.type === 'SELECT_MEAL'){
		return {
			mealName: action.payload.mealName,
			mealData: action.payload.mealData
		}
	}
	return state
}

export default combineReducers({
	isLocationLandingPage: isLocationLandingPage_Reducer,
	selectedMeal: selectedMeal_Reducer
})