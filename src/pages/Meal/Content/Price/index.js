import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

const Price = (props) => {

    const { total, breakdown } = props

    return (
        <Container>
            Price
        </Container>
    )
}

Price.propTypes = {
    total: PropTypes.number,
    breakdown: PropTypes.array
}

export default Price