import styled from "styled-components";

export const DocContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  background: #2C3335;
  color: white;
  overflow-y:hidden;
`;

export const DocWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 50vh;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

export const DocContent = styled.div`
    height: 768px;
    width: 768px;
    background:green;
`;

export const DocTitle = styled.h2`
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