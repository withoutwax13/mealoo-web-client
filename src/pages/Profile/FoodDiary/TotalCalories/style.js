import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid silver;
  padding: 20px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  padding: 10px;
`;

export const ResultWrapper = styled.div`
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
`;

export const ResultText = styled.h3`
  color: white;
  font-size: 30px;
  font-family: Courier New;
  font-weight: bold;
`;

export const MiscText = styled.h4`
  color: black;
  font-size: 20px;
  font-family: Helvetica;
  font-weight: bold;
  margin: 5px 0;
`;

export const SectionHeader = styled.div`
  font-family: Monospace;
  color: black;
  font-size: 20px;
  font-weight: bolder;
`;

export const Filter = styled.select`
  border: 1px solid silver;
  border-radius: 5px;
  height: 30px;
  width: 120px;
  highlight: none;
`;
