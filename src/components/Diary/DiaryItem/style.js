import styled from "styled-components";

export const ItemWrap = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 5px;
  width: 150px;
  border: 1px solid silver;
  border-radius: 10px;
  background-color: #eeeeee;
  box-shadow: 1px 1px 1px 1px gray;
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
  padding: 3px 0;
  border-top: 1px solid gray;
`;
export const Label = styled.div`
  color: black;
  font-size: 15px;
  font-family: Helvetica;
  font-weight: bold;
`;

export const DateData = styled.div`
  color: red;
  font-family: Monospace;
  font-weight: bold;
  font-size: 16px;
`;
export const MealsData = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MealItemData = styled.div`
  border-radius: 10px;
  background-color: teal;
  color: white;
  padding: 2px;
  margin: 1px 0;
  cursor: pointer;
`;
export const TotalCaloriesData = styled.div`
  color: orange;
  font-family: Monospace;
  font-weight: bold;
  font-size: 16px;
`;

export const TotalPriceData = styled.div`
  color: black;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial;
`;
