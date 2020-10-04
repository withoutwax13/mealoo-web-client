import React from "react";

import { Wrapper, DatePicker, DiaryWrapper, PickWrapper } from "./style";
import DayDiary from "../../../../components/Diary/DayDiary/index";

{
  /*
    # Find Diary
        render:
            - Date Picker Component of the user's previous diary entries
            - Component that will render the info from the date picked [default: today]
*/
}

const FindDiary = () => {
  const dummyData = {
    date: "11-17-11",
    listOfMeals: ["Meal 1", "Meal 2", "Meal 3"],
    totalCalories: 1234,
    totalPrice: 1000,
  };

  return (
    <Wrapper>
      <PickWrapper>
        <h4 style={{ margin: "8px 3px", fontWeight: "bold" }}>FIND: </h4>
        <DatePicker></DatePicker>
      </PickWrapper>
      <DiaryWrapper>
        <DayDiary data={dummyData} />
      </DiaryWrapper>
    </Wrapper>
  );
};

export default FindDiary;
