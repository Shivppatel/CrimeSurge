import styled from "styled-components";

export const StatisticsContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  background: #2a456e;
`;

export const StatisticsWrapper = styled.div`
display: flex;
flex-direction:column;
flex-wrap: nowrap;
justify-content:center;
align-items: center;
width: 98vw;
height: 85vh;

`;
export const DashImage = styled.img`
  min-width: 300px;
  border-radius: 10px;
  width: 40vw;
  align-items: center;
  object-fit: contain;
  @media screen and (max-width: 1080px) {
    width: 50vw;
  }
`;

export const StatisticsTitle = styled.h1`
  color: white;
  margin-bottom: 24px;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  margin-top: 14px;
  border-radius: 50px;
  background: #a3c2f0;
  color: #17263c;
  white-space: nowrap;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #17263c;
    color: white;
  }
`;
