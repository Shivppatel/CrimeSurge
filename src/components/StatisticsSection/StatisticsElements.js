import styled from "styled-components";

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  background: #dae0e2;
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

export const StatisticsContentMain = styled.div`
  flex: 0.8;
  padding: 20px;
  background: #2c3335;
  border-radius: 10px;
  width: 95vw;
  color: white;
`;
export const StatisticsContentBottom = styled.div`
  flex: 0.2;
  padding: 20px;
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
export const StatisticsContentLeft = styled.div`
  padding: 20px;
  flex: 0.4;
  height:100%;
  background: #2c3335;
  border-radius: 10px;
  min-width: 400px;
`;
export const StatisticsContentRight = styled.div`
  flex: 0.4;
  padding: 20px;
  background: #2c3335;
  border-radius: 10px;
  min-width: 400px;
  height:100%;
`;

export const StatisticsTitle = styled.h1`
  color: #17263c;
  margin-bottom: 64px;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
