import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

const Recipe = (props) => {
    return (
        <Container>
            Recipe
        </Container>
    )
}

Recipe.propTypes = {
    recipeData: PropTypes.array
}

export default Recipe