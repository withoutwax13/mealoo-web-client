import React from 'react'
import PropTypes from 'prop-types'

import { 
    Container,
    SectionTitle,
    ProductItem,
    Label,
    PriceLabel
 } from './style'

const Price = (props) => {

    const {
            breakdown = [
                {
                    name: 'Product 1', price: 12
                },
                {
                    name: 'Product 2', price: 20
                },
                {
                    name: 'Product 3', price: 12
                }
            ]
        } = props, total = breakdown.map(d=>d.price).reduce((a, b)=>a + b)

    return (
        <Container>
            <SectionTitle>Price Breakdown</SectionTitle>
            {breakdown.map((d, index)=>{
                return (
                    <ProductItem key={index}>
                        <Label>
                            {d.name}
                        </Label>
                        <PriceLabel>
                            {d.price}
                        </PriceLabel>
                    </ProductItem>
                )
            })}
            <ProductItem>
                <Label total={true}>Total</Label>
                <PriceLabel total={true}>{total}</PriceLabel>
            </ProductItem>
        </Container>
    )
}

Price.propTypes = {
    breakdown: PropTypes.array
}

export default Price