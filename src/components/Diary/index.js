import React from "react";
import PropTypes from "prop-types";

import DayDiary from "./DayDiary/index";
import WeekDiary from "./WeekDiary/index";

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
            actions:
            - fetch the diary data from server based on the data props passed
  */
}

const Diary = (props) => {
  const { type, data } = props;
  return type === "week" ? <WeekDiary data={data} /> : <DayDiary data={data} />;
};

Diary.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Diary;
