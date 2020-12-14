import React from "react";
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsWrapper,
  Button,
} from "./StatisticsElements";
import Dashboard from "../../images/dashboard.png";
const Stat = () => {
  return (
    <StatisticsContainer id="statistics">
      <StatisticsTitle>Statistics</StatisticsTitle>
      <a
        href="https://charts.mongodb.com/charts-crimesurge-ecocs/public/dashboards/5fd7af6f-71ac-4f45-853a-74ce76e1a89f"
        target="_blank"
        rel="noreferrer"
      >
        <StatisticsWrapper
          src={Dashboard}
          alt="CrimeSurge Statistics Dashboard"
        />
      </a>
      <a
        href="https://charts.mongodb.com/charts-crimesurge-ecocs/public/dashboards/5fd7af6f-71ac-4f45-853a-74ce76e1a89f"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Open statistics dashboard</Button>
      </a>
    </StatisticsContainer>
  );
};
export default Stat;
