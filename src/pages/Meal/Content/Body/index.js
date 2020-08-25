import React from 'react'
import PropTypes from 'prop-types'

import Recipe from './Recipe/index'
import Nutrition from './Nutrition/index'
import { Container } from './style'

const Body = (props) => {

	const { recipeData, nutritionalData, showRecipe } = props
	const renderBody = () => {
		return showRecipe ?
				<Recipe recipeData={recipeData}/> :
				<Nutrition nutritionalData={nutritionalData}/>
	}

	return (
		<Container>
			{ renderBody() }
		</Container>	
	)
}

Body.propTypes = {
	recipeData: PropTypes.object,
	nutritionalData: PropTypes.array,
	showRecipe: PropTypes.bool.isRequired
}

export default Body