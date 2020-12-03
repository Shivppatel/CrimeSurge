import styled from "styled-components";

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  background: #616c6f;
  color: white;
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

export const MapContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  max-width: 90vw;
  box-shadow: -5px 6px #a4b0bd;
  min-height: 300px;
  min-width: 300px;
`;

export const ContentTitle = styled.h1`
  margin-bottom: 64px;
  color: white;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
