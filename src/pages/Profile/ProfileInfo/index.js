import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  UserDetailsWrapper,
  UserBasicWrapper,
  UsernameWrapper,
  EmailWrapper,
  ChangePasswordWrapper,
  CaloricGoalWrapper,
  HeightWrapper,
  WeightWrapper,
  AgeWrapper,
  SexWrapper,
  DataLabel,
  DataValue,
} from "./style";
import TotalCalories from "../FoodDiary/TotalCalories/index";
import FindDiary from "../FoodDiary/FindDiary/index";

{
  /*
  id
  username
  password
  role
  email
  nutritionSettings
    dailyCaloricGoal
  mealooUserDetails
    height
    weight
    age
    sex
    physicalActivity
  foodDiaries
*/
}
const ProfileInfo = (props) => {
  const {
    username,
    email,
    nutritionSettings,
    mealooUserDetails,
  } = props.profileData;
  const { dailyCaloricGoal } = nutritionSettings;
  const { height, weight, age, sex, physicalActivity } = mealooUserDetails;

  return (
    <>
      <Wrapper>
        <UserBasicWrapper>
          <UsernameWrapper>
            <DataLabel>Username</DataLabel>
            <DataValue>{username}</DataValue>
          </UsernameWrapper>
          <EmailWrapper>
            <DataLabel>Email</DataLabel>
            <DataValue>{email}</DataValue>
          </EmailWrapper>
          <CaloricGoalWrapper>
            <DataLabel>Daily Caloric Goal</DataLabel>
            <DataValue>{dailyCaloricGoal}</DataValue>
          </CaloricGoalWrapper>
          <ChangePasswordWrapper>Change Password</ChangePasswordWrapper>
        </UserBasicWrapper>
        <UserDetailsWrapper>
          <HeightWrapper>
            <DataLabel>Height</DataLabel>
            <DataValue>{height}</DataValue>
          </HeightWrapper>
          <WeightWrapper>
            <DataLabel>Weight</DataLabel>
            <DataValue>{weight}</DataValue>
          </WeightWrapper>
          <AgeWrapper>
            <DataLabel>Age</DataLabel>
            <DataValue>{age}</DataValue>
          </AgeWrapper>
          <SexWrapper>
            <DataLabel>Sex</DataLabel>
            <DataValue>{sex}</DataValue>
          </SexWrapper>
        </UserDetailsWrapper>

        <TotalCalories />
        <FindDiary />
      </Wrapper>
    </>
  );
};

ProfileInfo.propTypes = {
  profileData: PropTypes.object,
};

export default ProfileInfo;
