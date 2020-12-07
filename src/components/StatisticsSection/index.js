import React from "react";
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsWrapper,
  StatisticsContentMain,
  StatisticsContentLeft,
  StatisticsContentRight,
  StatisticsContentBottom,
} from "./StatisticsElements";
import Chart from "react-apexcharts";
class Statistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crimeTypeList: [{ data: [] }],
      series: [
        {
          data: [
            {
              x: "ACCIDENT",
              y: 150,
            },
            { x: "THEFT FROM AUTO", y: 183 },
            { x: "THEFT", y: 190 },
            { x: "ASSAULT, SHOOTING", y: 3 },
            { x: "SEX OFFENSE", y: 7 },
            { x: "ASSAULT, WEAPON", y: 13 },
            { x: "ROBBERY, OTHER", y: 26 },
            { x: "B & E, RESIDENTIAL", y: 52 },
            { x: "B & E, COMMERCIAL", y: 19 },
            { x: "AUTO, STOLEN", y: 90 },
            { x: "VANDALISM", y: 85 },
            { x: "B & E, RESIDENTIAL (VACANT)", y: 1 },
            { x: "ROBBERY, COMMERCIAL", y: 14 },
            { x: "ROBBERY, COMMERCIAL", y: 14 },
            { x: "ASSAULT", y: 32 },
            { x: "ACCIDENT WITH IMPOUND", y: 115 },
            { x: "B & E, VACANT", y: 7 },
            { x: "B & E, OTHER", y: 4 },
            { x: "AUTO, STOLEN & RECOVERED", y: 8 },
            { x: "HOMICIDE", y: 1 },
          ],
        },
      ],
      options: {
        legend: {
          show: false,
        },
        chart: {
          height: 350,
          type: "treemap",
        },
        title: {
          text: "Basic Treemap",
        },
      },
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch(
        "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json"
      );
      const value = await response.json();
      const series = {};
      const seriesList =  [];
      value.forEach((element) => {
        if (element["clearance_code_inc_type"] in series) {
          series[element["clearance_code_inc_type"]] += 1;
        } else {
          series[element["clearance_code_inc_type"]] = 1;
        }
      });
      for (let type in series) {
          seriesList.push({ x: type, y: series[type] });
      }
      this.setState({
        isLoaded: true,
        crimeTypeList: [{data:seriesList}],
      });
      console.log(seriesList);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <StatisticsContainer id="statistics">
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsWrapper id="chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="treemap"
            height={700}
            width={700}
          />
        </StatisticsWrapper>
      </StatisticsContainer>
    );
  }
}
export default Statistics;
