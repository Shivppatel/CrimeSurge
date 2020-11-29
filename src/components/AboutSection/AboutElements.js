import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #DAE0E2;
`;
export const AboutWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction:column;
    padding-right:50px;
`;
export const ContentItem = styled.div`
    padding: 15px;
    @media screen and (max-width: 768px){
        padding: 18px;
    }
    @media screen and (max-width: 480px){
        padding: 15px;
    }
`;
export const AboutTitle = styled.h1`
    margin-top: 140px;
    margin-bottom: 40px;
    color: #0A79DF;
    font-size: 30px;
    max-width: 480px;
    text-align:center;

    @media screen and (max-width: 768px){
        font-size: 26px;
        margin-top: 150px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 22px;
    }
`;
export const ContentTitle = styled.h2`
    color: #0A79DF;
    font-size: 20px;
    text-align: ce;
    max-width: 380px;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`;
export const ContentBody = styled.p`
    margin-top: 10px;
    color: #616C6F;
    font-size: 16px;
    text-align: left;
    max-width: 480px;

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`;
export const AboutImage = styled.div`
    
`;
export const Image = styled.img`
        width: 450px;
    @media screen and (max-width: 768px){
        height: 300px;
    }
`;