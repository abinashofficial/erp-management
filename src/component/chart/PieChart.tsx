// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// interface PieChartProps {
//   // Define any props you may want to pass to the component
// }

// interface PieChartState {
//   options: any;
//   series: number[];
// }

// class PieChart extends React.Component<PieChartProps, PieChartState> {
//   constructor(props: PieChartProps) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           type: 'pie'
//         },
//         labels: ['Team A', 'Team B', 'Team C', 'Team D'],
//         colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
//       },
//       series: [44, 55, 13, 43]
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Pie Chart</h1>
//         <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height={350} />
//       </div>
//     );
//   }
// }

// export default PieChart;

// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// interface PieChartProps {
//   // Define any props you may want to pass to the component
// }

// interface PieChartState {
//   options: any;
//   series: number[];
// }

// class PieChart extends React.Component<PieChartProps, PieChartState> {
//   constructor(props: PieChartProps) {
//     super(props);

//     this.state = {
//       options: {
        // labels: ['Ground Components', 'Flight omponents', 'Consumable Components'],
        // colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
//         chart: {
//           width: 400, // Set the width of the chart
//           height: 400, // Set the height of the chart
//           type: 'pie',
//         },
//       },
//       series: [44, 55, 13],
//     };
//   }

//   render() {
//     return (
//       <div>
        // <h4 style={{
        //   fontWeight:"900",
        //   fontSize:"14px",
        //   fontFamily: "Helvetica, Arial, sans-serif",
        //   opacity:"1",
        // }}>Over All Request Type</h4>
//         <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height={this.state.options.chart.height} />
//       </div>
//     );
//   }
// }

// export default PieChart;



import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from './ApexCharts';


interface PieChartProps {
  width?: number;
  height?: number;
}

const PieChart: React.FC<PieChartProps> = () => {
  // const [chartOptions, setChartOptions] = useState({
  //   series: [44, 55, 13],
  //   chart: {
  //     type: 'pie',
  //     width: width,
  //     height: height,
  //   },
  //   labels: ['Ground Components', 'Flight omponents', 'Consumable Components'],
    // colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
  //       responsive: [{
  //     breakpoint: 480,
  //     options: {
  //       chart: {
  //         width: 200
  //       },
  //       legend: {
  //         position: 'bottom'
  //       }
  //     }
  //   }]
  // });

  const chart3SeriesData = [44, 55, 13]

  const chart3Options = {
    chart: {
      width: 560,
      // height:500,
      type: 'pie',
      toolbar: {
        show: true
      },
    },
    labels: ['Ground Components', 'Flight Components', 'Consumable Components'],
    colors: ['#CDA8FE', '#D5E2FF', '#FF8B7B'],

    legend: {
      position: "right",
      offsetY: 0,
      height: 100,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: "bottom",
          offsetY: 0,
          height: 20,
        },
      }
    }]
  };

  return (
    <div id="chart">
              <h4 style={{
          fontWeight:"900",
          fontSize:"14px",
          fontFamily: "Helvetica, Arial, sans-serif",
          opacity:"1",
        }}>Over All Requests</h4>
      {/* <Chart options={chartOptions} series={chartOptions.series} type="pie" width={width} height={height} /> */}
      <ApexCharts seriesData={chart3SeriesData} chartOptions={chart3Options} chartType="pie" function_name="pie_chart" />

    </div>
  );
};

export default PieChart;


