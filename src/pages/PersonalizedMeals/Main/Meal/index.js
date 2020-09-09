import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import History from '../../../../utils/History'

import { selectMeal, toggleMealFetch } from '../../../../modules/actions'

import {
    Container,
    MealTitle,
    ImageContainer
} from './style'

const Meal = (props) => {

    const { name, image } = props.mealData
    const { selectMeal, toggleMealFetch } = props

    const pressSelectMeal = () => {
        selectMeal(name)
        toggleMealFetch(true)
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
    selectMeal: PropTypes.func,
    toggleMealFetch: PropTypes.func
}

export default connect(null, { selectMeal, toggleMealFetch })(Meal)