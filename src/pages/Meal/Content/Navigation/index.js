import React from 'react'
import PropTypes from 'prop-types'

import { Container, NavigationItem } from './style'

const Navigation = (props) => {

	const { onNavigationChange, showRecipe } = props

	return (
		<Container>
			<NavigationItem selected={showRecipe === false ? true : false} onClick={onNavigationChange}>
				Nutrition
			</NavigationItem>
			<NavigationItem selected={showRecipe === false ? false : true} onClick={onNavigationChange}>
				Recipe
			</NavigationItem>
		</Container>
	)
}

Navigation.propTypes = {
	onNavigationChange: PropTypes.func.isRequired,
	showRecipe: PropTypes.bool.isRequired
}

export default Navigation