import API from '../utils/API'

export const checkIsCurrentLandingPage = (status) => {
	return {
		type: 'TOGGLE_IS_CURRENT_LANDING_PAGE',
		payload: status
	}
}

export const selectMeal = (mealName) => async dispatch => {
	await API
			.get(`meals/${mealName}`)
			.then(res=>{
				dispatch({ type: 'SELECT_MEAL', payload: { mealName: mealName, mealData: res.data } })
			})
			.catch(e=>console.log(e))
}

export const clearMealSelection = () => {
	return { type: 'CLEAR_MEAL_SELECTION' }
}

export const toggleMealFetch = (status) => {
	return {
		type: status === true ? `TOGGLE_MEAL_FETCH_ON` : `TOGGLE_MEAL_FETCH_OFF`
	}
}

export const clientLogIn = () => {
	return { type: 'CLIENT_LOG_IN' }
}

export const clientLogOut = () => {
	return { type: 'CLIENT_LOG_OUT' }
}

export const fetchSuggestedMealSet = () => {
	return { type: 'FETCH_SET' }
}