import React from 'react'
import PropTypes from 'prop-types'

import Meal from './Meal/index'

import {
    Container
} from './style'

const Main = (props) => {


    {/* Test data for the meantime */}
    const {
        setData = [
            { name: 'PastaAndChicken', image: null},
            { name: 'MilkAndStrawberry', image: null},
            { name: 'OnlyBeef', image: null}
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