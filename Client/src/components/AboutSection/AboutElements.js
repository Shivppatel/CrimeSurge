import styled from "styled-components";

export const AboutContainer = styled.div`
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
export const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 70vh;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  max-width: 90vw;
  box-shadow: 0px 0px 5px #a3c2f0;
`;
export const ContentItem = styled.div`
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 18px;
  }
  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`;
export const AboutTitle = styled.h1`
  color: white;
  margin-bottom: 14px;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ContentTitle = styled.h2`
  color: #17263c;
  font-size: 20px;
  max-width: 380px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
export const ContentBody = styled.p`
  margin-top: 10px;
  color: #616c6f;
  font-size: 16px;
  text-align: left;
  max-width: 480px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
export const AboutImage = styled.div`
  margin-left: 20px;
  padding: 20px;
  background: #17263c;
  border-radius: 10px;
  border:none;
`;
export const Image = styled.img`
  width: 250px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1160px) {
    width: 450px;
  }
`;
