import React from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    MealTitle,
    ImageContainer
} from './style'

const Meal = (props) => {

    const { name, image } = props.mealData

    return (
        <Container>
            <MealTitle>{name}</MealTitle>
            <ImageContainer>{image ? image : ``}</ImageContainer>
        </Container>
    )
}

Meal.propTypes = {
    mealData: PropTypes.object
}

export default Meal