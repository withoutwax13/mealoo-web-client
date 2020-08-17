import { combineReducers } from 'redux'

const isLocationLandingPage_Reducer = (state = null, action) => {
	if(action.type === 'TOGGLE_IS_CURRENT_LANDING_PAGE'){
		return action.payload
	}
	return state
}

export default combineReducers({
	isLocationLandingPage: isLocationLandingPage_Reducer
})