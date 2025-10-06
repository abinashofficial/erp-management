import PieChart from '../../component/chart/PieChart.tsx';
import LineChartWeak from "../../component/chart/LineChartWeak.tsx"
import Box from '@mui/material/Box';
import  { useState } from 'react';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import "./DashBoard.css"
import { DashboardRequest } from '../track_req/DashboardReq.tsx';
import overallsvg from "../../assets/overall_png.png"
import groundpng from "../../assets/ground_png.png"
import flightpng from "../../assets/flight_png.png"
import consumablepng from "../../assets/consumable_png.png"
import GroundComponentRequest from "./GroundComponents.tsx"









export function WeakRequest() {
  // const [myList, setMyList] = useState<string[]>(["Today", "Weak", "Month", "Year"]);
  // const [value, setValue] = useState<string>("");
  const [componentValue, setComponentValue] = useState<string>("Overall");

  // const [assignPacker, setAssignPacker] = useState<boolean>(false);

  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');
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


      <Box style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        gap:"10px"
      }}  flexDirection={{ xs: 'column', md: 'row' }} >

<div  style={{
  backgroundColor:"white",
  padding:"10px",
  borderRadius: "10px",
  marginBottom:"20px",
  cursor:"pointer",
}} onClick={()=>setComponentValue("Overall")}>

        <div  style={
          {
            display:"flex",
            justifyContent:"space-between",
          }
        }>
          

          <div style={{
            marginLeft:"4px",
                      width:"3px",
                      height:"50px",
                      backgroundColor:"#C7A96E"
          }}>
                      <p style={{
                        marginLeft:"10px",
                        fontSize:"13px",
                        whiteSpace: 'nowrap' 
                      }}>
            Overall
          </p>
          <p style={{
            marginLeft:"10px",

          }}>
            24
          </p>

          </div>
          <div style={{
            height:"30px",
            width:"30px",
            margin:"5px",
          }}>
          <ArrowOutwardRoundedIcon style={{
            fontSize:"25x",
            padding:"4px",
            border:"1px solid #C7A96E",
            borderRadius:"10px",
          }}/>

          </div>
        

          </div>

          
                    <div style={{
marginTop:"8px",
          }} >
      <img src={overallsvg} alt="coins" />

          </div>

        </div>




        
<div style={{
  backgroundColor:"white",
  padding:"10px",
  borderRadius: "10px",
  marginBottom:"20px",
  cursor:"pointer",
  

}} onClick={()=>setComponentValue("Ground Components")}>

        <div  style={
          {
            display:"flex",
            justifyContent:"space-between",
          }
        }>
          

          <div style={{
            marginLeft:"4px",
                      width:"3px",
                      height:"50px",
                      backgroundColor:"#CDA8FE"
          }}>
                      <p style={{
                        marginLeft:"10px",
                        fontSize:"13px",
                        whiteSpace: 'nowrap' 
                      }}>
  Ground Components
          </p>
          <p style={{
            marginLeft:"10px",

          }}>
            8
          </p>

          </div>
          <div style={{
            height:"30px",
            width:"30px",
            margin:"5px",
  
          }}>
          <ArrowOutwardRoundedIcon style={{
            fontSize:"25x",
            padding:"4px",
            border:"1px solid #CDA8FE",
            borderRadius:"10px",
          }}/>

          </div>
        

          </div>

          
                    <div style={{
marginTop:"8px",
          }} >
      <img src={groundpng} alt="coins" />

          </div>

        </div>



        <div style={{
  backgroundColor:"white",
  padding:"10px",
  borderRadius: "10px",
  marginBottom:"20px",
  cursor:"pointer",
}}  onClick={()=>setComponentValue("Flight Components")}>

        <div  style={
          {
            display:"flex",
            justifyContent:"space-between",
          }
        }>
          

          <div style={{
            marginLeft:"4px",
                      width:"3px",
                      height:"50px",
                      backgroundColor:"#D5E2FF"
          }}>
                      <p style={{
                        marginLeft:"10px",
                        fontSize:"13px",
                        whiteSpace: 'nowrap' 
                      }}>
  Flight Components
          </p>
          <p style={{
            marginLeft:"10px",

          }}>
            9
          </p>

          </div>
          <div style={{
            height:"30px",
            width:"30px",
            margin:"5px",
          }}>
          <ArrowOutwardRoundedIcon style={{
            fontSize:"25x",
            padding:"4px",
            border:"1px solid #D5E2FF",
            borderRadius:"10px",
          }}/>

          </div>
        

          </div>

          
                    <div style={{
marginTop:"8px",
          }} >
      <img src={flightpng} alt="flight" />

          </div>

        </div>


        <div style={{
  backgroundColor:"white",
  padding:"10px",
  borderRadius: "10px",
  marginBottom:"20px",
  cursor:"pointer",
}}  onClick={()=>setComponentValue("Consumable Components")}>

        <div  style={
          {
            display:"flex",
            justifyContent:"space-between",
          }
        }>
          

          <div style={{
            marginLeft:"4px",
                      width:"3px",
                      height:"50px",
                      backgroundColor:"#FF8B7B"
          }}>
                      <p style={{
                        marginLeft:"10px",
                        fontSize:"13px",
                        whiteSpace: 'nowrap' 
                      }}>
  Consumable Components
          </p>
          <p style={{
            marginLeft:"10px",

          }}>
            7
          </p>

          </div>
          <div style={{
            height:"30px",
            width:"30px",
            margin:"5px",
          }}>
          <ArrowOutwardRoundedIcon style={{
            fontSize:"25x",
            padding:"4px",
            border:"1px solid #FF8B7B",
            borderRadius:"10px",
          }}/>

          </div>
        

          </div>

          
                    <div style={{
marginTop:"8px",
          }} >
      <img src={consumablepng} alt="consumable" />

          </div>

        </div>
      
      </Box>

     {componentValue === "Overall"  &&
       <Box display="flex" justifyContent="space-around" flexDirection={{ xs: 'column', md: 'row' }} gap="20px" >
       <div style={{
         backgroundColor:"white",
         padding:"20px",
         borderRadius:"20px",
       }}>
       <LineChartWeak/>

       </div>
       <div style={{
         backgroundColor:"white",
         padding:"20px",
         borderRadius:"20px",

       }}>
       <PieChart/>

       </div>


     </Box>}

      {componentValue != "Overall"  &&
<GroundComponentRequest data={componentValue}/>


    }

      <div
      style={{
        backgroundColor:"white",
        marginTop:"20px",
        borderRadius:"10px",
      }}
      >

      <DashboardRequest/>

      </div>
      {/* <BorderVerticalProgress variant="determinate" value={50} /> */}
      {/* <div>
      <img className="menu_icons" src={overallsvg} alt="coins" />

          </div> */}
    </Box>
  );
}



export default WeakRequest;









