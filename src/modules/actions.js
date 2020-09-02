import API from '../utils/API'

export const checkIsCurrentLandingPage = (status) => {
	return {
		type: 'TOGGLE_IS_CURRENT_LANDING_PAGE',
		payload: status
	}
}

export const selectMeal = (mealName) => async dispatch => {
	await API
			.get(`meal/${mealName.split(' ').join('')}`)
			.then(res=>{
				dispatch({ mealName: mealName, mealData: res.data})
			})
			.catch(e=>console.log(e))
}