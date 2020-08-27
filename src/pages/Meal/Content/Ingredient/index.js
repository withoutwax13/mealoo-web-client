import React, { Fragment } from 'react'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'

import { 
        Container, 
        ProductItem, 
        ProductLabel, 
        ProductTooltip, 
        ProductsContainer, 
        SectionTitle 
    } from './style'

const Ingredient = (props) => {

    const {
            ingredientData = [
                {
                    product: {
                        name: 'Egg', price: 22, caloriesPer100g: 10
                    },
                    amount: 2
                },
                {
                    product: {
                        name: 'Cabbage', price: 76, caloriesPer100g: 5
                    },
                    amount: 6
                },
                {
                    product: {
                        name: 'Beef', price: 12, caloriesPer100g: 189
                    },
                    amount: 4
                }
            ]
        } = props

    const renderIngredients = () => {
            return (
                <ProductsContainer>
                    {ingredientData.map(data=>{
                        return (
                            <ProductItem key={`${data.amount}-${data.product.name}`}>
                                <ProductLabel 
                                    data-tip 
                                    data-for={`${data.amount}-${data.product.name}`}
                                    >
                                        {data.product.name}
                                </ProductLabel>
                                <ReactTooltip 
                                    id={`${data.amount}-${data.product.name}`}
                                    type='info'>
                                        <ProductTooltip>
                                            <h4>Product Details</h4>
                                            <p>
                                                <strong>Amount:  </strong> 
                                                {data.amount}
                                            </p>
                                            <p>
                                                <strong>Price:  </strong> 
                                                {data.product.price}
                                            </p>
                                            <p>
                                                <strong>Calories per 100g:  </strong> 
                                                {data.product.caloriesPer100g}
                                            </p>
                                        </ProductTooltip>
                                </ReactTooltip>
                            </ProductItem>
                        )
                    })}
                </ProductsContainer>
            )
    }

    return (
        <Container>
            <SectionTitle>Meal Ingredients:</SectionTitle>
            {renderIngredients()}
        </Container>
    )
}

Ingredient.propTypes = {
    ingredientData: PropTypes.array
}

export default Ingredient