import styled from "styled-components";

export const MapContainer = styled.div`
  background: #a3c2f0;
  justify-content: center;
  align-items: center;
  height: 95vh;
  position: relative;
  z-index: 1;
  padding:30px;
`;

export const ContentTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 2.5rem;
  text-align: center;
  color: white;
  padding: 30px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
