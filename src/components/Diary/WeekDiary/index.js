import React from "react";
import PropTypes from "prop-types";

import { Wrapper, SectionHeader } from "./style";
import HDComponent from "./HDComponent/index";
import DesktopComponent from "./DesktopComponent/index";
import TabletComponent from "./TabletComponent/index";
import MobileComponent from "./MobileComponent/index";
import SmallTablet from "./SmallTablet/index";

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

const WeekDiary = (props) => {
  const { data } = props;
  return (
    <>
      <SectionHeader>MY WEEK</SectionHeader>
      <Wrapper>
        <HDComponent data={data} />
        <DesktopComponent data={data} />
        <TabletComponent data={data} />
        <SmallTablet data={data} />
        <MobileComponent data={data} />
      </Wrapper>
    </>
  );
};

WeekDiary.propTypes = {
  data: PropTypes.array.isRequired,
};

export default WeekDiary;
