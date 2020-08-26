import React from 'react'

import Ingredient from './Ingredient/index'
import Nutrition from './Nutrition/index'
import Price from './Price/index'
import Recipe from './Recipe/index'

import { Container, LeftSection, RightSection } from './style'

const Content = (props) => {

	return (
		<Container>
			<LeftSection>
				<Nutrition/>
				<Price/>
			</LeftSection>
			<RightSection>
				<Ingredient/>
				<Recipe/>
			</RightSection>
		</Container>
	)
}

export default Content