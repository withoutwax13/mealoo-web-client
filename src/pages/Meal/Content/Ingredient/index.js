import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

const Ingredient = (props) => {

    const { ingredientData } = props

    return (
        <Container>Ingredient</Container>
    )
}

Ingredient.propTypes = {
    ingredientData: PropTypes.array
}

export default Ingredient