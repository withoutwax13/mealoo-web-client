import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;
