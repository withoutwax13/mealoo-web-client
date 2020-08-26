import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

const Content = (props) => {

	const { recipeData, nutritionalData } = props

	return (
		<Container>
			Content
		</Container>
	)
}

Content.propTypes = {
	recipeData: PropTypes.object,
	nutritionalData: PropTypes.array
}

export default Content