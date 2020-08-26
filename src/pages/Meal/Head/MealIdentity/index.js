import React from 'react'
import PropTypes from 'prop-types'

import AddMeal from '../../../../components/Button/AddMeal/index'
import { Container, ImageContainer, ActionContainer, LabelContainer, LabelText } from './style'

const MealIdentity = (props) => {

	const { mealLabel, mealImage } = props

	return (
		<Container>
			<ImageContainer>
				{/*Image File as component here [passed by the mealImage prop]*/}
			</ImageContainer>
			<ActionContainer>
				<LabelContainer>
					<LabelText>
						{mealLabel}
					</LabelText>
				</LabelContainer>
				<AddMeal/>
			</ActionContainer>
		</Container>
	)
}

MealIdentity.propTypes = {
	mealLabel: PropTypes.string,
	mealImage: PropTypes.node
}

export default MealIdentity