import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 1600px) {
    display: none;
  }

  @media (min-width: 1281px) and (max-width: 1599px) {
    display: none;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display: none;
  }
`;
