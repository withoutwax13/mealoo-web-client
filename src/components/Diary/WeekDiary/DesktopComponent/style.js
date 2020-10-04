import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 1600px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
