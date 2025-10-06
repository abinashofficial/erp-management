
import PieChart from '../../component/chart/PieChart';
import DonutChart from '../../component/chart/DonutChart';
import LineChart from "../../component/chart/LineChartMonth"
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







interface Data {
  data: string;
}


const GroundComponentRequest: React.FC<Data> = ({ data }) => {
  const [myList, setMyList] = useState<string[]>(["Today", "Weak", "Month", "Year"]);
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();


  const options = ['Option 1', 'Option 2', 'Option 3'];

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

  const donutChartData = {
    series: [44, 55, 13],
    labels: ['Approved', 'Rejected', 'Pending'],
    colors: ['#008FFB', '#00E396', '#FEB019']

  };
  
  
  return (

      <Box display="flex"  flexDirection={{ xs: 'column', md: 'row' }} >

      <div style={{
        backgroundColor:"white",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        padding:"50px",
        borderRadius:"20px",
      }}>
      <div >
      <h2>{data}</h2>
      <DonutChart data={donutChartData} />
        </div>
        </div>

      </Box>
  );
}

export default GroundComponentRequest;








