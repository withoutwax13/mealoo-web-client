import { combineReducers } from 'redux'

const isLocationLandingPage_Reducer = (state = null, action) => {
	if(action.type === 'TOGGLE_IS_CURRENT_LANDING_PAGE'){
		return action.payload
	}
	return state
}

const selectedMeal_Reducer = (state = { mealName: '', mealData: null, isFetching: false }, action) => {
	if(action.type === 'SELECT_MEAL'){
		return {
			mealName: action.payload.mealName,
			mealData: action.payload.mealData,
			isFetching: true
		}
	}
	else if(action.type === 'CLEAR_MEAL_SELECTION'){
		return { mealName: '', mealData: null, isFetching: false }
	}
	return state
}

const isFetchingMeal_Reducer = (state = false, action) => {
	if(action.type === 'TOGGLE_MEAL_FETCH_ON'){
		return true
	}else if(action.type === 'TOGGLE_MEAL_FETCH_OFF'){
		return false
	}
	return state
}

const suggestedMealSet_Reducer = (state = [], action) => {
	if(action.type === 'FETCH_SET'){

		{/* Fetch the suggested meal set from server */}
		{/* For the meantime, dummy suggestion data */}
		return [
            { name: 'PastaAndChicken', image: null},
            { name: 'MilkAndStrawberry', image: null},
            { name: 'OnlyBeef', image: null}
        ]
	}
	return state
}

const isClientHasAuth_Reducer = (state = false, action) => {
	switch(action.type){
		case 'CLIENT_LOG_IN':
			return true
		case 'CLIENT_LOG_OUT':
			return false
		default:
			return state
	}
}

export default combineReducers({
	isLocationLandingPage: isLocationLandingPage_Reducer,
	selectedMeal: selectedMeal_Reducer,
	isClientHasAuth: isClientHasAuth_Reducer,
	suggestedMealSet: suggestedMealSet_Reducer,
	isFetchingMeal: isFetchingMeal_Reducer
})