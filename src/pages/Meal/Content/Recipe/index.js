import React from 'react'
import PropTypes from 'prop-types'

import { 
        Container,
        SectionTitle,
        RecipeContainer,
        RecipeItem
     } from './style'

const Recipe = (props) => {

    const { recipeData } = props

    const renderRecipe = () => {
        return (
            <RecipeContainer>
                {recipeData.length > 0 ? recipeData.map((item, index)=><RecipeItem key={index}>{item}</RecipeItem>) : `No recipe available.`}
            </RecipeContainer>
        )
    }
    return (
        <Container>
            <SectionTitle>Recipe</SectionTitle>
            {renderRecipe()}
        </Container>
    )
}

Recipe.propTypes = {
    recipeData: PropTypes.array
}

export default Recipe