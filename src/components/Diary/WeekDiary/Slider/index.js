import React from "react";
import styled from "styled-components";

export const LeftSlider = (props) => (
  <Wrapper
    onClick={() => slideLeft(props.scope, props.editScope)}
  >{`<`}</Wrapper>
);
export const RightSlider = (props) => (
  <Wrapper
    onClick={() => slideRight(props.scope, props.editScope)}
  >{`>`}</Wrapper>
);

const Wrapper = styled.div`
  color: black;
  font-size: 50px;
  font-family: Arial;
  font-weight: bolder;
  cursor: pointer;
  margin: 70px 10px;
  user-select: none;
`;
const slideLeft = (data, action) => {
  const scopeLimit = 0;
  let newScope = [];
  if (data.indexOf(scopeLimit) === -1) {
    data.forEach((d) => {
      newScope.push(d - 1);
    });
    action(newScope);
  }
};

const slideRight = (data, action) => {
  const scopeLimit = 6;
  let newScope = [];
  if (data.indexOf(scopeLimit) === -1) {
    data.forEach((d) => {
      newScope.push(d + 1);
    });
    action(newScope);
  }
};
