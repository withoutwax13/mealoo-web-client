import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import History from '../../../../utils/History'

import { selectMeal } from '../../../../modules/actions'

import {
    Container,
    MealTitle,
    ImageContainer
} from './style'

const Meal = (props) => {

    const { name, image } = props.mealData
    const { selectMeal } = props

    const pressSelectMeal = () => {
        selectMeal(name)
        History.push('/meal')
    }

    return (
        <Container>
            <MealTitle onClick={pressSelectMeal}>{name}</MealTitle>
            <ImageContainer onClick={pressSelectMeal}>{image ? image : ``}</ImageContainer>
        </Container>
    )
}

Meal.propTypes = {
    mealData: PropTypes.object,
    selectMeal: PropTypes.func
}

export default connect(null, { selectMeal })(Meal)