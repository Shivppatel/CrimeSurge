import styled from "styled-components";

export const MapContainer = styled.div`
  padding:40px;
  background: #616c6f;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
  position: relative;
  z-index: 1;
`;

export const ContentTitle = styled.h1`
  margin-bottom:10px;
  color: white;
  font-size: 2.5rem;
  text-align:center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
