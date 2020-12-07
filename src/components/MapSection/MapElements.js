import styled from "styled-components";

export const MapContainer = styled.div`
  background: #A3C2F0;
  justify-content: center;
  align-items: center;
  height: 92vh;
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
