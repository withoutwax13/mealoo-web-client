import React from 'react'
import PropTypes from 'prop-types'

import { 
        Container, 
        SectionTitle,
        NutritionItem, 
        Label, 
        NutritionAmount 
    } from './style'

const Nutrition = (props) => {

    const { 
        calories = 0, 
        macronutrients = { 
            carbohydrates: 0,
            proteins: 0,
            fats: 0  
        } 
    } = props
    const { carbohydrates, proteins, fats } = macronutrients

    return (
        <Container>
            <SectionTitle>Nutritional Detail</SectionTitle>
            <div 
                style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'flex-end',
                    marginTop: '10px',
                    marginBottom: '5px'
                }}>
                <Label color={`orange`}>Per 100g</Label>
            </div>
            <div style={{
                    marginTop: '10px', 
                    marginBottom: '10px'
                }}>
                <NutritionItem>
                    <Label color='#ff4949ff'>Calories</Label>
                    <NutritionAmount>{calories}</NutritionAmount>
                </NutritionItem>
                <NutritionItem>
                    <Label color='#bb77bbff'>Carbohydrates</Label>
                    <NutritionAmount>{carbohydrates}</NutritionAmount>
                </NutritionItem>
                <NutritionItem>
                    <Label color={`#c9b35cff`}>Proteins</Label>
                    <NutritionAmount>{proteins}</NutritionAmount>
                </NutritionItem>
                <NutritionItem>
                    <Label color={`#e39999ff`}>Fats</Label>
                    <NutritionAmount>{fats}</NutritionAmount>
                </NutritionItem>
            </div>
        </Container>
    )
}

Nutrition.propTypes = {
    calories: PropTypes.number,
    macronutrients: PropTypes.object
}

export default Nutrition