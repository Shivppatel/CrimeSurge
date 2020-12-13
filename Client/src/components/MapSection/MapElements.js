import styled from "styled-components";

export const MapContainer = styled.div`
  background: #a3c2f0;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const MapWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items: center;
width: 98vw;
height: 85vh;
`;

export const MapTitle = styled.h1`
  padding-top: 20px;
  font-size: 2.5rem;
  text-align: center;
  color: #17263c;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const IncidentMap = styled.div`
flex:0.8;
height: 95%;
min-width:300px;
box-shadow: 0px 0px 5px #17263c;
`;
