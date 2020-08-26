import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Body from './Body/index'

import { Container } from './style'

const Content = (props) => {

	const { recipeData, nutritionalData } = props

	return (
		<Container>
			<Body recipeData={recipeData} nutritionalData={nutritionalData}/>
		</Container>
	)
}

Content.propTypes = {
	recipeData: PropTypes.object,
	nutritionalData: PropTypes.array
}

export default Content