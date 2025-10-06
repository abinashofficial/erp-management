// import React from "react";
// import ApexCharts from '../../component/chart/ApexCharts'

// const OverAllDashboardRequest: React.FC = () => {

//   const colorMap = {
//     Series1: '#F44336',
//     Series2: '#E91E63',
//     Series3: '#9C27B0'
//   };

//   const chart1SeriesData = [
//     { name: "Series1", data: 44 },
//     { name: "Series2", data: 55 },
//     { name: "Series3", data: 13 },
//     { name: "Series4", data: 33 }
//   ];

//   const chart1Options = {
//     chart: {
//       width: 350,
//       type: "donut",
//       toolbar: {
//         show: true
//       },
//     },
//     dataLabels: {
//       enabled: true,
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             show: false,
//           },
//         },
//       },
//     ],
//     legend: {
//       position: "bottom",
//       offsetY: 0,
//       height: 20,
//     },
//   };

  

//   const chart2SeriesData = [
//     {
//       name: 'PENDING',
//       data: [44, 55, 41, 67, 22, 43]
//     }, {
//       name: 'REJECT',
//       data: [13, 23, 20, 8, 13, 27]
//     }, {
//       name: 'APPROVED',
//       data: [11, 17, 15, 15, 21, 14]
//     }, {
//       name: 'ASSIGNED',
//       data: [21, 7, 25, 13, 22, 8]
//     }
//   ];

//   const chart2Options = {
//     chart: {
//       type: 'bar',
//       height: 350,
//       width: 650,
//       stacked: true,
//       toolbar: {
//         show: true
//       },zoom: {
//         enabled: true
//       }
//     },
//     responsive: [{
//       breakpoint: 480,
//       options: {
//         legend: {
//           position: 'bottom',
//           offsetX: -10,
//           offsetY: 0
//         }
//       }
//     }],
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         borderRadius: 10,
//         dataLabels: {
//           total: {
//             enabled: true,
//             style: {
//               fontSize: '13px',
//               fontWeight: 900
//             }
//           }
//         }
//       },
//     },
//     xaxis: {
//       type: 'datetime',
//       categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
//         '01/05/2011 GMT', '01/06/2011 GMT'
//       ],
//     },
//     legend: {
//       position: 'right',
//       offsetY: 40
//     },
//     fill: {
//       opacity: 1
//     }
//   };


//   const chart3SeriesData = [44, 55, 13, 43, 22]

//   const chart3Options = {
//     chart: {
//       width: 350,
//       type: 'pie',
//       toolbar: {
//         show: true
//       },
//     },
//     labels: ['SURYA', 'VIKRAM', 'KAMAL', 'VIMAL', 'ANJALI'],
//     legend: {
//       position: "bottom",
//       offsetY: 0,
//       height: 20,
//     },
//     responsive: [{
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200
//         },
//         legend: {
//           position: "bottom",
//           offsetY: 0,
//           height: 20,
//         },
//       }
//     }]
//   };

//   const chart4SeriesData = [
//   {
//     name: "Desktops",
//     data: [10, 31, 65, 91, 5, 92, 69, 31, 1010]
//   },
//   {
//     name: "High - 2013",
//     data: [28, 69, 93, 81, 62, 42, 33 , 21, 34]
//   },
//   {
//     name: "Low - 2013",
//     data: [12, 41, 84, 118, 97, 83, 63 , 41, 14]
//   }
//   ];

//   const chart4Options = {
//     chart: {
//       height: 380,
//       width: 580,
//       type: 'line',
//       zoom: {
//         enabled: false
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       curve: 'straight'
//     },
//     title: {
//       text: 'Product Trends by Month',
//       align: 'left'
//     },
//     grid: {
//       row: {
//         colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//         opacity: 0.5
//       },
//     },
//     xaxis: {
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//     }
//   };



//   return (
//     <div>

//       <div style={{display: 'flex'}}>
        
//       <div>
//       <h1>Donut Chart</h1>
//       <ApexCharts seriesData={chart1SeriesData} chartOptions={chart1Options} chartType="donut" function_name="donut_chart" />
//       </div>
//       <div  style={{width: '50px'}}></div>
//       <div>
//       <h1>Pie Chart</h1>
//       <ApexCharts seriesData={chart3SeriesData} chartOptions={chart3Options} chartType="pie" function_name="pie_chart" />
//       </div>

//       </div>
      
   
//       <div style={{display: 'flex' , marginTop : '30px'}}>
        
//       <div>
//         <h1>Bar Chart</h1>
//         <ApexCharts seriesData={chart2SeriesData} chartOptions={chart2Options} chartType="bar" function_name="single_bar_chart" />
//       </div>

//       <div  style={{width: '50px'}}></div>

//       <div>
//         <h1>Line Chart</h1>
//         <ApexCharts seriesData={chart4SeriesData} chartOptions={chart4Options} chartType="line" function_name="single_bar_chart" />
//       </div>

//       </div>
//     </div>

    
//   );
// };

// export default OverAllDashboardRequest;




import PieChart from '../../component/chart/PieChart';
import DonutChart from '../../component/chart/DonutChart';
import LineChart from "../../component/chart/LineChartMonth.tsx"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { display } from '@mui/system';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from "@mui/material/Select";
import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import "./DashBoard.css"
// import { CSmartTable } from '@coreui/react-pro';
import { CBadge,CButton,CAvatar,CCollapse,CCardBody} from '@coreui/react';
import { DashboardRequest } from '../track_req/DashboardReq';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import overallsvg from "../../assets/overall_png.png"
import groundpng from "../../assets/ground_png.png"
import flightpng from "../../assets/flight_png.png"
import consumablepng from "../../assets/consumable_png.png"
import { useNavigate } from "react-router-dom";
import {TodayRequest} from "./TodayReq.tsx"
import {MonthRequest} from "./MonthlyReq.tsx"
import {WeakRequest} from "./WeekReq.tsx"
import PackerDashboardRequest from './TodayPacker.tsx';
import MonthPackerDashboardRequest from './MonthPacker.tsx';
import WeekPackerDashboardRequest from './WeekPacker.tsx';












export function OverAllDashboardRequest() {
  const [myList, setMyList] = useState<string[]>(["Today", "Week", "Month"]);
  const [timeLine, setTimeLine] = useState<string>("Today");
  const [menuList, setMenuList] = useState<string>("Request");

  // const [assignPacker, setAssignPacker] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();


  const options = ['Option 1', 'Option 2', 'Option 3'];

  const assignPacker = () => {
    navigate("/dashboard/packer")
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };



  const handleChange = (label: string) => (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
  
  };

  // const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  //   width:60,
  //   height: 6,
  //   borderRadius: 5,
  //   [`&.${linearProgressClasses.colorPrimary}`]: {
  //     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  //   },
  //   [`& .${linearProgressClasses.bar}`]: {
  //     borderRadius: 5,
  //     backgroundColor: theme.palette.mode === 'light' ? '#C7A96E' : '#C7A96E',
  //   },
  // }));

  const BorderVerticalProgress = styled(LinearProgress)(({ theme }) => ({
    height: 60, // Change width to height
    width: 6, // Change height to width
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#C7A96E' : '#C7A96E',
    },
  }));
  const handleComponentClinic = () => {
    console.log('Search icon clicked!');
    navigate("/dashboard/groundcomponents")
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{
        
          display:"flex",
          justifyContent:"space-between",
          backgroundColor:"white",
          borderRadius:"20px",
          marginBottom:"40px",

      }}>
        <Box display="flex" justifyContent="space-between"  flexDirection={{ xs: 'column', md: 'row' }}>
        <Button style={{
          marginLeft:"10px",
        }} onClick={()=>setMenuList("Request")}>
          Request
        </Button>
        <Button>
          Coins
        </Button>
        <Button>
          Billings
        </Button>
        <Button style={{
          marginLeft:"10px",
        
        }} onClick={()=>setMenuList("Work Assigned")}>
          Work Assigned
        </Button>
        </Box>


          <FormControl style={{
          width:"auto",

        }} >
            <InputLabel id="periods">Time Line</InputLabel>
            <Select
              labelId="periods"
              id="periods-select"
              value={timeLine}
              onChange={(event) => setTimeLine(event.target.value)}
              label="Periods"
            >
              {myList.map(option => (
                <MenuItem className ="menuItemoption" key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          
      </div>
      {menuList === "Request" && 
      <div>
      {timeLine === "Today" && <TodayRequest/>}
      {timeLine === "Week" && <WeakRequest/>}
      {timeLine === "Month" && <MonthRequest/>}
      </div>

      }

{(menuList === "Work Assigned" && timeLine === "Today") && 

<PackerDashboardRequest/>
    }

{(menuList === "Work Assigned" && timeLine === "Month") && 

<MonthPackerDashboardRequest/>
    }

{(menuList === "Work Assigned" && timeLine === "Week") && 

<WeekPackerDashboardRequest/>
    }



    </Box>
  );
}



export default OverAllDashboardRequest;




