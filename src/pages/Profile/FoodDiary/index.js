import React from "react";
import PropTypes from "prop-types";

import { Wrapper, SectionWrapper } from "./style";
import FindDiary from "./FindDiary/index";
import TotalCalories from "./TotalCalories/index";
import Diary from "../../../components/Diary/index";

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

const dummyWeekDiaryData = [
  {
    date: "11-11-11",
    listOfMeals: ["Meal 1", "Meal 2", "Meal 3"],
    totalCalories: 1234,
    totalPrice: 1000,
  },
  {
    date: "11-12-11",
    listOfMeals: ["Meal 1", "Meal 2", "Meal 3"],
    totalCalories: 1234,
    totalPrice: 1000,
  },
  {
    date: "11-13-11",
    listOfMeals: ["Meal 1", "Meal 2", "Meal 3"],
    totalCalories: 1234,
    totalPrice: 1000,
  },
  {
    date: "11-14-11",
    listOfMeals: ["Meal 1", "Meal 2", "Meal 3"],
    totalCalories: 1234,
    totalPrice: 1000,
  },
  {
    date: "11-15-11",
    listOfMeals: ["Meal 1", "Meal 2", "Meal 3"],
    totalCalories: 1234,
    totalPrice: 1000,
  },
  {
    date: "11-16-11",
    listOfMeals: ["Meal 1", "Meal 2", "Meal 3"],
    totalCalories: 1234,
    totalPrice: 1000,
  },
  {
    date: "11-17-11",
    listOfMeals: ["Meal 1", "Meal 2", "Meal 3"],
    totalCalories: 1234,
    totalPrice: 1000,
  },
];

const FoodDiary = (props) => {
  return (
    <Wrapper>
      <Diary type="week" data={dummyWeekDiaryData} />
    </Wrapper>
  );
};

FoodDiary.propTypes = {
  diaryCollection: PropTypes.array,
};

export default FoodDiary;
