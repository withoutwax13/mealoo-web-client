import React from "react";
import PropTypes from "prop-types";

import DiaryItem from "../DiaryItem/index";

{
  /*
      # Diary
          render:
              - tabulated data chart of diary entries on the current week
              - chart values include:
                      - date
                      - listOfMeals
                      - mealMacronutrients
                      - totalCalories
                      - totalPrice
  */
}

const DayDiary = (props) => {
  const { data } = props;
  return <DiaryItem data={data} />;
};

DayDiary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DayDiary;
