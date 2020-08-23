import React from 'react'
import PropTypes from 'prop-types'

import { Container, ImageContainer, LabelContainer, LabelText } from './style'

const MealIdentity = (props) => {

	const { mealLabel, mealImage } = props

	return (
		<Container>
			<ImageContainer>
				{/*Image File as component here [passed by the mealImage prop]*/}
			</ImageContainer>
			<LabelContainer>
				<LabelText>
					{mealLabel}
				</LabelText>
			</LabelContainer>
		</Container>
	)
}

MealIdentity.propTypes = {
	mealLabel: PropTypes.string,
	mealImage: PropTypes.node
}

export default MealIdentity