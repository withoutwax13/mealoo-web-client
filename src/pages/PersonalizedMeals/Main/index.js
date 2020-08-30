import React from 'react'
import PropTypes from 'prop-types'

import Meal from './Meal/index'

import {
    Container
} from './style'

const Main = (props) => {

    const {
        setData = [
            { name: 'Meal 1', image: null},
            { name: 'Meal 2', image: null},
            { name: 'Meal 3', image: null}
        ]
    } = props

    return (
        <Container>
            {setData.map((meal, index)=><Meal key={index} mealData={meal}/>)}
        </Container>
    )
}

Main.propTypes = {
    setData: PropTypes.array
}

export default Main