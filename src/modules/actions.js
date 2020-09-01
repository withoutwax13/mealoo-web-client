import API from '../utils/API'

export const checkIsCurrentLandingPage = (status) => {
	return {
		type: 'TOGGLE_IS_CURRENT_LANDING_PAGE',
		payload: status
	}
}

export const selectMeal = (mealName) => async dispatch => {
	await API
			.get('/meal')
			.then(res=>{
				let mealData = res.data.filter(d=>d.name === mealName.split(' ').join(''))
				dispatch({ mealName: mealName, mealData: mealData})
			})
}