import React from 'react'
import PropTypes from 'prop-types'

import MealIdentity from './MealIdentity/index'
import NavPanel from './NavPanel/index'

import { Container } from './style'

const Head = (props) => {
	return (
		<Container>
			<NavPanel/>
			<MealIdentity mealLabel={props.mealName}/>
		</Container>
	)
}

Head.propTypes = {
	mealName: PropTypes.string
}

export default Head