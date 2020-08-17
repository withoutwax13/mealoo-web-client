export const checkIsCurrentLandingPage = (status) => {
	return {
		type: 'TOGGLE_IS_CURRENT_LANDING_PAGE',
		payload: status
	}
}