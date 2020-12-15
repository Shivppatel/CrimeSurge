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

export const StatisticsWrapper = styled.img`
  min-width: 300px;
  border-radius: 10px;
  width: 40vw;
  align-items: center;
  object-fit: contain;
`;

export const StatisticsTitle = styled.h1`
  color: white;
  margin-bottom: 34px;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  margin-top: 34px;
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
