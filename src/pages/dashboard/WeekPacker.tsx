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




import PieChart from '../../component/chart/PieChart.tsx';
import DonutChart from '../../component/chart/DonutChart.tsx';
import LineChart from "../../component/chart/LineChartMonth.tsx"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { display } from '@mui/system';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from "@mui/material/Select";
import React, { useState, useEffect, useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import "./DashBoard.css"
// import { CSmartTable } from '@coreui/react-pro';
import { CBadge,CButton,CAvatar,CCollapse,CCardBody} from '@coreui/react';
import { DashboardRequest } from '../track_req/DashboardReq.tsx';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import overallsvg from "../../assets/overall_png.png"
import groundpng from "../../assets/ground_png.png"
import flightpng from "../../assets/flight_png.png"
import consumablepng from "../../assets/consumable_png.png"
import { useNavigate } from "react-router-dom";
import BarChart from '../../component/chart/BarChartWeek.tsx';
import {CommonTableRequest} from "./CommonTable.tsx" 

import { locateContext } from "../../App.tsx";
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import "./QualityLeadReq.css"
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import CustomStepper from "../../component/stepper/Stepper.tsx";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { QualityLeadApprovalRequest } from "../raise-req/QualityLeadApprovalReq.tsx";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  const pageSize = 5; // Number of items per page
  
  interface Item {
    name: string;
    employee_id: string;
    employee_name: string;
    package_type: string;
    status: string;
    transport_from: string;
    transport_to: string;
    transport_mode: string;
    purpose: string;
    image_1: null;
    image_2:null;
    image_3:null;
    image_4:null;
    image_5:null;
    image_6:null;
    packer_name:string;
  }
  


  interface Message {
    message: {
      values:[],
    },
  }






export function WeekPackerDashboardRequest() {
    const [data1, setData1] = useState<Message>({
        message:{
          values:[],
        },
      });
    
    useEffect(() => {
        async function fetchData() {
          try {
            const fields = '["`tabUser`.`full_name`"]';
            const filters = '[["Has Role","role","=","Packer"]]';
            const order_by = '`tabUser`.`modified` DESC';
            const group_by = '`tabUser`.`name`';
            
            const response = await fetch(`/api/method/frappe.desk.reportview.get?doctype=User&fields=${fields}&filters=${filters}&order_by=${order_by}&start=0&page_length=20&view=List&group_by=${group_by}&with_comment_count=true`);
    
                    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const jsonData = await response.json();
            console.log('success', jsonData);
    
            setData1(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
  const [myList, setMyList] = useState<string[]>(["Today", "Weak", "Month", "Year"]);
  const [value, setValue] = useState<string>("");
  const [assignPacker, setAssignPacker] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState("");
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [overallFilter, setOverallFilter] = useState<string>('');

    const { packerApprovalRequestData} = useContext(locateContext);

  const [currentPage, setCurrentPage] = useState(1);
  const data = packerApprovalRequestData // Provide your data here

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const currentItems = data.slice(startIndex, endIndex);




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



  const handlePackerChange = () => (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    console.log(selectedValue[0], "selectedValue")

  setSelectedOptions(selectedValue)
  setOverallFilter(selectedValue[0]);

  }
        // Function to filter the table data based on filters
        const filteredRows = currentItems.filter((row:any) => {
            return Object.entries(row).some(([key, value]) => {
              if (!overallFilter) return true;
              if (typeof value === 'string') {
                return value.toLowerCase().includes(overallFilter.toLowerCase());
              }
              return false;
            }) && Object.entries(filters).every(([key, value]) => {
              if (!value) return true;
              if (typeof row[key] === 'number') {
                return row[key] == parseInt(value);
              } else {
                return row[key].toLowerCase().includes(value.toLowerCase());
              }
            });
          });
          const goToPage = (pageNumber: number) => {
            if (totalPages>=pageNumber && pageNumber>=1){
                setCurrentPage(pageNumber);
          
              }
            // Your go to page logic here
          };

          const goToFirstPage = () => {
            setCurrentPage(1);
          };
        
          const goToLastPage = () => {
            setCurrentPage(totalPages);
          };
        
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div  style={{
        

        backgroundColor:"white",
        borderRadius:"20px",
        marginBottom:"40px",
        width:"280px"
    }}>
      {/* {data1.message.values.map((option: string) => (
                <Button style={{
                    marginLeft:"10px",
                  }}>
      {option} 
                  </Button>
  ))}  */}

<div style={{
    width:"100%",
    display:"flex",
    justifyContent:"center",
}}>
          <FormControl className="req_fields">
            <InputLabel id="assignpacker">Packer</InputLabel>
            <Select
              labelId="assignpacker"
              id="assignpacker-select"
              value={selectedOptions}
              onChange={handlePackerChange()}
              label="Assign Packer"
            >
              {/* {data1.message.values.map(option => (
                <MenuItem key={option} value={option}>
                  {option} 
                </MenuItem>
              ))} */}
                {data1.message.values.map((option: string) => (
    <MenuItem className ="menuItemoption" key={option} value={option}>
      {option} 
    </MenuItem>
  ))} 
            </Select>
          </FormControl>
        </div>


      </div>



        <Box display="flex" justifyContent="space-around"  flexDirection="column" >
      <div style={{
        backgroundColor:"white",
        width:"90%",
        display:"flex",
        justifyContent:"center",
        padding:"50px",
      }}>
      <div >
      <h2> Packed Requests</h2>
      <BarChart />
        </div>
        </div>

        <div style={{
        backgroundColor:"white",
        width:"90%",
        display:"flex",
        justifyContent:"center",
        padding:"50px",
      }}>
      <div >
      <h2> Pending Requests</h2>
      <BarChart />
        </div>
        </div>

        <div style={{
        backgroundColor:"white",
        width:"90%",
        display:"flex",
        justifyContent:"center",
        padding:"50px",
      }}>
      <div >
      <h2> Rejected Requests</h2>
      <BarChart />
        </div>
        </div>

        <div style={{
        backgroundColor:"white",
        width:"90%",
        display:"flex",
        justifyContent:"center",
        padding:"50px",
      }}>
      <div >
      <h2> Repacked Requests</h2>
      <BarChart />
        </div>
        </div>


      </Box>

      <div
      style={{
        backgroundColor:"white",
        marginTop:"20px",
        borderRadius:"10px",
      }}
      >

      {/* <CommonTableRequest/> */}
   <Box display="flex" justifyContent="space-between" flexDirection={{ xs: 'column', md: 'row' }}>


<div style={{
          padding:"10px",
        }}>
          <h2>
            Last Tasks
          </h2>
          <div style={{
            display:"flex",
          }}>
          <p style={{
            fontWeight:"bold",
          }}>
            120 total,
          </p>
          <p style={{
            marginLeft:"5px",
            fontSize:"12px",
            marginTop:"5px",
          }}>
          Proceed to resolve them

          </p>
          </div>

        </div>

        <Box display="flex" justifyContent="space-between" flexDirection={{ xs: 'column', md: 'row' }}>

<div style={{
  display:"flex",
}}>

        <div style={{
          padding:"10px",
        }}>
        <h2>
            94
          </h2>
          <p style={{
                        fontSize:"12px",
                        marginTop:"5px",
          }}>
            done
          </p>
        </div>

        <div style={{
          marginTop:"20px",
          height:"40px",
          width:"3px",
          backgroundColor:"grey",
        }}>

        </div>

        <div style={{
          padding:"10px",
        }}>
        <h2>
            23
          </h2>
          <p style={{
            fontSize:"12px",
            marginTop:"5px",

          }}>
            Pending
          </p>
        </div>
        </div>



       
        </Box>
        </Box>
    
    <div style={{
      display: "flex",
      flexDirection: "column",
      marginTop:"20px",
      padding:"10px",
    }}>

      <div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead className='test'>

              <TableRow >
                {/* <TableCell>
                  <Checkbox
                    indeterminate={selectedItems.length > 0 && selectedItems.length < currentItems.length}
                    checked={selectedItems.length === currentItems.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell> */}
                <StyledTableCell align="center">S.NO</StyledTableCell>

                <StyledTableCell>Request ID</StyledTableCell>
                <StyledTableCell align="center">Employee ID</StyledTableCell>
                <StyledTableCell align="center">Employee Name</StyledTableCell>
                <StyledTableCell align="center">Package Type</StyledTableCell>
                <StyledTableCell align="center">Packer</StyledTableCell>

                <StyledTableCell align="center">Transport Mode</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                {/* <StyledTableCell align="center">Actions</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
            {filteredRows.map((item: Item, index:number) => (
              // {currentItems.map((item: Item, index:number) => (
                <StyledTableRow key={index}>
                  {/* <TableCell>
                    <Checkbox
                      checked={selectedItems.indexOf(index) !== -1}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </TableCell> */}

                  <TableCell align="center" >{index+1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="center" >{item.employee_id}</TableCell>
                  <TableCell align="center">{item.employee_name}</TableCell>
                  <TableCell align="center">{item.package_type}</TableCell>
                  <TableCell align="center">{item.packer_name}</TableCell>
                  <TableCell align="center" >{item.transport_mode} </TableCell>
                  <TableCell align="center" >{item.status} </TableCell>
                  {/* <TableCell align="right">
                    <div style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "8px"
                    }}>
                      <VisibilityTwoToneIcon onClick={()=>userAction(item)}/>
                    </div>
                  </TableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "5px",
        marginTop: "50px",
      }}>
      <IconButton onClick={goToFirstPage} disabled={currentPage === 1}>
        <KeyboardDoubleArrowLeftIcon sx={{ cursor: 'pointer' }} />
      </IconButton>

      <IconButton onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        <KeyboardArrowLeftIcon sx={{ cursor: 'pointer' }} />
      </IconButton>
      <div style={{display:"flex",
      flexDirection:"column",
            justifyContent: "center",
          }}>
      <span>{currentPage} / {totalPages}</span>

      </div>
      <IconButton onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
        <ChevronRightIcon sx={{ cursor: 'pointer' }} />
      </IconButton>
      <IconButton onClick={goToLastPage} disabled={currentPage === totalPages}>
        <KeyboardDoubleArrowRightIcon sx={{ cursor: 'pointer' }} />
      </IconButton>
    </div>

    </div>


      </div>

    </Box>
  );
}



export default WeekPackerDashboardRequest;




