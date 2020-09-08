import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { clearMealSelection } from '../../../modules/actions'

import Ingredient from './Ingredient/index'
import Nutrition from './Nutrition/index'
import Price from './Price/index'
import Recipe from './Recipe/index'

import { Container, LeftSection, RightSection } from './style'

const Content = (props) => {

	const { mealData, clearMealSelection } = props

	if(mealData){
		useEffect(()=>{
			return ()=> clearMealSelection()
		}, [])
		return (
			<Container>
				<LeftSection>
					<Nutrition 
						calories={mealData.totalCalories} 
						macronutrients={{
							carbohydrates: mealData.mealMacronutrients.totalCarbohydrates,
							proteins: mealData.mealMacronutrients.totalProteins,
							fats: mealData.mealMacronutrients.totalFats
						}}
					/>
					<Price 
						breakdown={
							mealData.ingredients ?
							mealData.ingredients.map(d=>{
								return {
									name: d.product.name, 
									price: d.product.price
								}
							}) :
							mealData.ingredients
						}
					/>
				</LeftSection>
				<RightSection>
					<Ingredient ingredientData={mealData.ingredients}/>
					<Recipe recipeData={mealData.recipe}/>
				</RightSection>
			</Container>
		)
	} else {
		return <h2>Loading</h2>
	}
}

Content.propTypes = {
	mealData: PropTypes.object,
	clearMealSelection: PropTypes.func
}

export default connect(null, { clearMealSelection })(Content)