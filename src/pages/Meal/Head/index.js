import React from 'react'

import MealIdentity from './MealIdentity/index'
import NavPanel from './NavPanel/index'

import { Container } from './style'

const Head = () => {
	return (
		<Container>
			<NavPanel/>
			<MealIdentity/>
		</Container>
	)
}

export default Head