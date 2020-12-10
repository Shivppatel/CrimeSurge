import styled from "styled-components";

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  background: #2a456e;
`;

export const StatisticsWrapper = styled.div`
  width: 98vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 75vh;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

export const StatisticsTitle = styled.h1`
  color: white;
  margin-bottom: 64px;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
