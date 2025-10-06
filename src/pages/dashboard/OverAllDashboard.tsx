import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import "./DashBoard.css"

import {TodayRequest} from "./TodayReq.tsx"
import {MonthRequest} from "./MonthlyReq.tsx"
import {WeakRequest} from "./WeekReq.tsx"
import PackerDashboardRequest from './TodayPacker.tsx';
import MonthPackerDashboardRequest from './MonthPacker.tsx';
import WeekPackerDashboardRequest from './WeekPacker.tsx';












export function OverAllDashboardRequest() {
  const [myList] = useState<string[]>(["Today", "Week", "Month"]);
  const [timeLine, setTimeLine] = useState<string>("Today");
  const [menuList, setMenuList] = useState<string>("Request");

  // const [assignPacker, setAssignPacker] = useState<boolean>(false);

  // const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();


  // const options = ['Option 1', 'Option 2', 'Option 3'];

  // const assignPacker = () => {
  //   navigate("/dashboard/packer")
  // };

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleOptionSelect = (option: string) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };



  // const handleChange = (label: string) => (event: SelectChangeEvent<string>) => {
  //   const selectedValue = event.target.value;
  
  // };

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

  // const BorderVerticalProgress = styled(LinearProgress)(({ theme }) => ({
  //   height: 60, // Change width to height
  //   width: 6, // Change height to width
  //   borderRadius: 5,
  //   [`&.${linearProgressClasses.colorPrimary}`]: {
  //     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  //   },
  //   [`& .${linearProgressClasses.bar}`]: {
  //     borderRadius: 5,
  //     backgroundColor: theme.palette.mode === 'light' ? '#C7A96E' : '#C7A96E',
  //   },
  // }));
  // const handleComponentClinic = () => {
  //   console.log('Search icon clicked!');
  //   navigate("/dashboard/groundcomponents")
  // };
  
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




