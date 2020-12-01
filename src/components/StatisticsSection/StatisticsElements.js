import styled from "styled-components";

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  width:100vw;
  position: relative;
  z-index: 1;
  background: #DAE0E2;
  color: white;
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 50vh;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

export const StatisticsContent = styled.div`
    min-height: 300px;
    min-width: 300px;
    margin-right:20px;
    margin-left: 20px;
    padding:20px;
    background: white;
    border-radius: 10px;
    max-width: 90vw;
    box-shadow: -5px 6px #A4B0BD;
`;

export const StatisticsTitle = styled.h2`
margin-bottom: 40px;
    color: #0A79DF;
    font-size: 32px;
    max-width: 480px;
    text-align:center;

    @media screen and (max-width: 768px){
        font-size: 28px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 24px;
    }
`;