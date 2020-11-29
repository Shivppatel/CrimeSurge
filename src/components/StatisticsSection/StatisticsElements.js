import styled from "styled-components";

export const StatisticsContainer = styled.div`
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

export const StatisticsTitle = styled.h1`
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