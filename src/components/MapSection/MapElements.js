import styled from "styled-components";

export const MapContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  background: #616c6f;
`;

export const ContentTitle = styled.h1`
  margin-bottom: 64px;
  color: white;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
