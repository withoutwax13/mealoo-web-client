import React from "react";
import PropTypes from "prop-types";

import {
  ItemWrap,
  MealsData,
  DateData,
  TotalCaloriesData,
  Label,
  MealItemData,
  RowWrapper,
  TotalPriceData,
} from "./style";

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

const DiaryItem = (props) => {
  const { date, listOfMeals, totalPrice, totalCalories } = props.data;

  return (
    <ItemWrap>
      <RowWrapper>
        <Label>Date</Label>
        <DateData>{date}</DateData>
      </RowWrapper>
      <RowWrapper>
        <Label>Meals</Label>
        <MealsData>
          {listOfMeals.map((meal) => (
            <MealItemData key={meal}>{meal}</MealItemData>
          ))}
        </MealsData>
      </RowWrapper>
      <RowWrapper>
        <Label>Total Calories</Label>
        <TotalCaloriesData>{totalCalories}</TotalCaloriesData>
      </RowWrapper>
      <RowWrapper>
        <Label>Total Price</Label>
        <TotalPriceData>{totalPrice}</TotalPriceData>
      </RowWrapper>
    </ItemWrap>
  );
};

DiaryItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DiaryItem;
