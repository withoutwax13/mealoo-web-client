import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Navigation from './Navigation/index'
import Body from './Body/index'

import { Container } from './style'

const Content = (props) => {

	const { recipeData, nutritionalData } = props
	const [ showRecipe, setShowRecipe ] = useState(false)

	const onNavigationChange = () => {
		setShowRecipe(!showRecipe)
	}

	return (
		<Container>
			<Navigation onNavigationChange={onNavigationChange} showRecipe={showRecipe}/>
			<Body recipeData={recipeData} nutritionalData={nutritionalData} showRecipe={showRecipe}/>
		</Container>
	)
}

Content.propTypes = {
	recipeData: PropTypes.object,
	nutritionalData: PropTypes.array
}

export default Content