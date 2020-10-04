import React from "react";

import {
  Wrapper,
  FilterWrapper,
  ResultWrapper,
  Filter,
  ResultText,
  MiscText,
  SectionHeader,
} from "./style";

{
  /*
    # TotalCalories
        render:
            - Filter of startDate to endDate on showing totalCalories consumed based on the diary entries
            - Render Component to show the totalCalories data based on the startDate and endDate filter
*/
}

const TotalCalories = () => {
  // dummy options
  const options = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
  ];

  return (
    <Wrapper>
      <SectionHeader>TOTAL CALORIES</SectionHeader>
      <FilterWrapper>
        <MiscText>From: </MiscText>
        <Filter>]</Filter>
        <MiscText>To: </MiscText>
        <Filter>]</Filter>
      </FilterWrapper>
      <ResultWrapper>
        <ResultText>10000</ResultText>
      </ResultWrapper>
    </Wrapper>
  );
};

export default TotalCalories;
