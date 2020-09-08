import React from 'react'
import PropTypes from 'prop-types'

import Meal from './Meal/index'

import {
    Container
} from './style'

const Main = (props) => {


    {/* Test data for the meantime */}
    const { setData } = props

    if(setData){
        return (
            <Container>
                {setData.map((meal, index)=><Meal key={index} mealData={meal}/>)}
            </Container>
        )
    }else{
        return <h1>Loading</h1>
    }
}

Main.propTypes = {
    setData: PropTypes.array
}

export default Main