import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

const Nutrition = (props) => {

    const { calories, macronutrients } = props

    return (
        <Container>
            Nutrition
        </Container>
    )
}

Nutrition.propTypes = {
    calories: PropTypes.number,
    macronutrients: PropTypes.object
}

export default Nutrition