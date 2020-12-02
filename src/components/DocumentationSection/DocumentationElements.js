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
  background: #DAE0E2;
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

export const IntroductionContent = styled.div`
    min-height: 300px;
    
    min-width:400px;
    margin-right:20px;
    margin-left: 20px;
    margin-bottom: 50px;
    padding:20px;
    background: white;
    border-radius: 10px;
    max-width: 90vw;
    box-shadow: -5px 6px #A4B0BD;
`;
export const AccountContent = styled.div`
    min-height: 300px;
    min-width: 400px;
    margin-right:20px;
    margin-left: 20px;
    margin-bottom: 50px;
    padding:20px;
    background: white;
    border-radius: 10px;
    max-width: 90vw;
    box-shadow: -5px 6px #A4B0BD;
`;
export const VisualContent = styled.div`
    min-height: 300px;
    min-width: 400px;
    margin-right:20px;
    margin-left: 20px;
    margin-bottom;
    padding:20px;
    background: white;
    border-radius: 10px;
    max-width: 90vw;
    box-shadow: -5px 6px #A4B0BD;
`;
export const VisualExportContent = styled.div`
    min-height: 300px;
    min-width: 400px;
    margin-right:20px;
    margin-left: 20px;
    padding:20px;
    background: white;
    border-radius: 10px;
    max-width: 90vw;
    box-shadow: -5px 6px #A4B0BD;
`;
export const ScopeContent = styled.div`
    min-height: 300px;
    min-width: 400px;
    margin-right:20px;
    margin-left: 20px;
    padding:20px;
    background: white;
    border-radius: 10px;
    max-width: 90vw;
    box-shadow: -5px 6px #A4B0BD;
`;
export const CLContent = styled.div`
    min-height: 300px;
    min-width: 400px;
    margin-right:20px;
    margin-left: 20px;
    padding:20px;
    background: white;
    border-radius: 10px;
    max-width: 90vw;
    box-shadow: -5px 6px #A4B0BD;
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