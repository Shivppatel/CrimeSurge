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
  background: #616c6f;
  color: black;
  overflow-y: hidden;
`;

export const DocWrapper = styled.div`
  max-width: 1000px;
  margin: 25px auto; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content:center;
  grid-gap: 16px;
  padding: 0 50px;
  height: 40vh;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    height: 70vh;
  }
`;

export const DocCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  border-radius: 10px;
  padding: 25px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 1px 3px #17263c;
  transition: all 0.2s ease-in-out;
  max-height: 230px;
  

  @media screen and (max-width: 480px) {
    max-height: 210px;
    padding:20px;
  }
  @media screen and (min-width: 1000px) {
    min-height: 400px;
  }
  
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const DocIcon = styled.img`
  width: 150px;
  margin-bottom: 10px;
    @media screen and (max-width: 768px){
        width: 200px;
    }
    @media screen and (min-width: 1000px) {
        width: 250px;
  }
`

export const DocH1 = styled.h1`
  margin-bottom: 64px;
  color: white;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const DocH2 = styled.h2`
  margin-bottom: 10px;
  font-size: 1rem;
`;

export const DocP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const Link = styled.a`
text-decoration:none;
color: #17263c;
`
