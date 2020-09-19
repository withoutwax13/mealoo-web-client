import React from 'react'
import PropTypes from 'prop-types'

const FoodDiary = (props) => {
    return (
        <div>
            Food Diary Component
        </div>
    )
}

FoodDiary.propTypes = {
    diaryCollection: PropTypes.array
}

export default FoodDiary