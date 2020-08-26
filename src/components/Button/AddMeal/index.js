import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './style'

const AddMeal = (props) => {
    return (
        <Button {...props}>+</Button>
    )
}

AddMeal.propTypes = {
    customStyle: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
}

export default AddMeal