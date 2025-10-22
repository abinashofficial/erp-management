
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from "@mui/material/Select";
import { useState, useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import "./DashBoard.css"

import BarChart from '../../component/chart/BarChartMonth.tsx';


import { locateContext } from "../../App.tsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';


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






export function MonthPackerDashboardRequest() {
    const [data1] = useState<Message>({
        message:{
          values:[],
        },
      });
    
    // useEffect(() => {
    //     async function fetchData() {
    //       try {
    //         const fields = '["`tabUser`.`full_name`"]';
    //         const filters = '[["Has Role","role","=","Packer"]]';
    //         const order_by = '`tabUser`.`modified` DESC';
    //         const group_by = '`tabUser`.`name`';
            
    //         const response = await fetch(`/api/method/frappe.desk.reportview.get?doctype=User&fields=${fields}&filters=${filters}&order_by=${order_by}&start=0&page_length=20&view=List&group_by=${group_by}&with_comment_count=true`);
    
                    
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    
    //         const jsonData = await response.json();
    //         console.log('success', jsonData);
    
    //         setData1(jsonData);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     }
    
    //     fetchData();
    //   }, []);
  // const [myList, setMyList] = useState<string[]>(["Today", "Weak", "Month", "Year"]);
  // const [value, setValue] = useState<string>("");
  // const [assignPacker, setAssignPacker] = useState<boolean>(false);

  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');
  // const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState("");
  const [filters] = useState<{ [key: string]: string }>({});
  const [overallFilter, setOverallFilter] = useState<string>('');

    const { packerApprovalRequestData} = useContext(locateContext);

  const [currentPage, setCurrentPage] = useState(1);
  const data = packerApprovalRequestData // Provide your data here

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const currentItems = data.slice(startIndex, endIndex);




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



  const handlePackerChange = () => (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    console.log(selectedValue[0], "selectedValue")

  setSelectedOptions(selectedValue)
  setOverallFilter(selectedValue[0]);

  }
        // Function to filter the table data based on filters
        const filteredRows = currentItems.filter((row:any) => {
            return Object.entries(row).some(([_key, value]) => {
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



export default MonthPackerDashboardRequest;




