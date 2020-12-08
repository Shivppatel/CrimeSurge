import React from "react";


import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsWrapper,
  StatisticsContentMain,
  StatisticsContentLeft,
  StatisticsContentRight,
  StatisticsContentBottom,
  StatChart,
  StatButton
} from "./StatisticsElements";

const Statistics = () => {
  
  return (
    <StatisticsContainer id="statistics">
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsWrapper>
      <StatChart>

            

      </StatChart>

      <StatButton
                type="submit"
                class="submitButton"
                name="submitButton"
            >Crime Statistics Unveiled</StatButton>
            
      </StatisticsWrapper>
      <script src="canvasjs.min.js"></script>
    <script src="script.js"></script>
    </StatisticsContainer>
  );
  
};

export default Statistics;
