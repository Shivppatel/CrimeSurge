import React from "react";
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsWrapper,
  StatisticsContentMain,
  StatisticsContentLeft,
  StatisticsContentRight,
  StatisticsContentBottom
} from "./StatisticsElements";

const Statistics = () => {
  return (
    <StatisticsContainer id="statistics">
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsWrapper>
        <StatisticsContentMain>
          <h2>Main visual will go here</h2>
        </StatisticsContentMain>
        <StatisticsContentBottom>
          <StatisticsContentLeft>
            <h2>Left visual will go here</h2>
          </StatisticsContentLeft>
          <StatisticsContentRight>
            <h2>Right visual will go here</h2>
          </StatisticsContentRight>
        </StatisticsContentBottom>
      </StatisticsWrapper>
    </StatisticsContainer>
  );
};

export default Statistics;
