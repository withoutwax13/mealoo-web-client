import React from "react";
import PropTypes from "prop-types";

import FindDiary from "./FindDiary/index";
import TotalCalories from "./TotalCalories/index";
import WeekDiary from "./WeekDiary/index";

{
  /*
    # FoodDiary
        props:
            - date
            - listOfMeals
            - mealMacronutrients
            - totalCalories
            - totalPrice

        render:
            - Chart of the week's diary details
            - Filter feature of showing how many calories
                have been taken since picked startDate to picked
                lastDate
            - Find a specific date's meal diary
            - Button for methods of adding diary entry:
                1. Generate automated diary entry
                2. Custom adding of diary entry
        
        child components:
            - WeekDiary [Chart of a week's meal diary]
            - TotalCalories [Component showing total calories consumed]
            - FindDiary [Find a specific date's diary]
*/
}

const FoodDiary = (props) => {
  return (
    <div>
      <WeekDiary />
      <TotalCalories />
      <FindDiary />
    </div>
  );
};

FoodDiary.propTypes = {
  diaryCollection: PropTypes.array,
};

export default FoodDiary;
