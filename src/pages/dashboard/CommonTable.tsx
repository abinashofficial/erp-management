
import { useContext, useEffect } from "react";
import { locateContext } from "../../App";
import Button from '@mui/material/Button';
import React, { useState } from 'react';
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
import CustomStepper from "../../component/stepper/Stepper";
import Box from '@mui/material/Box';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { QualityLeadApprovalRequest } from "../raise-req/QualityLeadApprovalReq";
import IconButton from "@mui/material/IconButton";
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

export function CommonTableRequest() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [overallFilter, setOverallFilter] = useState<string>('');

    const { packerApprovalRequestData} = useContext(locateContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const data = packerApprovalRequestData // Provide your data here

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const currentItems = data.slice(startIndex, endIndex);
  const [selectItem, setSelectItem] = useState({
    name: "",
    employee_id: "",
    employee_name: "",
    package_type: "",
    status: "",
    transport_from: "",
    transport_to: "",
    transport_mode: "",
    purpose: "",
    image_1:null,
    image_2:null,
    image_3:null,
    image_4:null,
    image_5:null,
    image_6:null,
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




  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

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

    // Function to update filters state
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
      const value = e.target.value;
      setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
    };
  
      // Function to handle dropdown filter change
      const handleDropdownFilterChange = (e: React.ChangeEvent<HTMLSelectElement>, field: string) => {
        const value = e.target.value;
        setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
      };

            // Function to handle overall filter change
  const handleOverallFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOverallFilter(value);
  };
  
  return (

    <div>
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



        <TextField
        id="search"
        label="Search"
        value={overallFilter}
        style={{
          margin:"10px",
          width:"250px",
        }}
        onChange={handleOverallFilterChange}
      />
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
            <TableRow  >
                                <StyledTableCell align="center"></StyledTableCell>

                <StyledTableCell>
                <input
                 type="text"
                 placeholder="Filter by Request ID"
                 value={filters.name || ''}
                 onChange={(e) => handleFilterChange(e, 'name')}
               />
                </StyledTableCell>
                <StyledTableCell align="center">
                <input
                 type="text"
                 placeholder="Filter by Employee ID"
                 value={filters.employee_id || ''}
                 onChange={(e) => handleFilterChange(e, 'employee_id')}
               />
                </StyledTableCell>
                <StyledTableCell align="center">
                <input
                 type="text"
                 placeholder="Filter by Employee Name"
                 value={filters.employee_name || ''}
                 onChange={(e) => handleFilterChange(e, 'employee_name')}
               />
                </StyledTableCell>
                <StyledTableCell align="center">
                                            <select
                value={filters.package_type || ''}
                onChange={(e) => handleDropdownFilterChange(e, 'package_type')}
              >
                <option value="">All Components</option>
                <option value="Ground Components">Ground Components</option>
                <option value="Flight Components">Flight Components</option>
                <option value="Consumable Components">Consumable Components</option>
              </select>
                </StyledTableCell>

                <StyledTableCell align="center">
                <input
                 type="text"
                 placeholder="Filter by Packer Name"
                 value={filters.packer_name || ''}
                 onChange={(e) => handleFilterChange(e, 'packer_name')}
               />
                </StyledTableCell>


                <StyledTableCell align="center">
                {/* <input
                 type="text"
                 placeholder="Filter by Package Type"
                 value={filters.package_type || ''}
                 onChange={(e) => handleFilterChange(e, 'package_type')}
               /> */}
                                            <select
                value={filters.transport_mode || ''}
                onChange={(e) => handleDropdownFilterChange(e, 'transport_mode')}
              >
                <option value="">All Transport</option>
                <option value="Train">Train</option>
                <option value="Van">Van</option>
                <option value="Bus">Bus</option>
                <option value="Bike">Bike</option>
                <option value="Car">Car</option>
                <option value="Ship">Ship</option>
                <option value="Flight">Flight</option>


              </select>
                </StyledTableCell>


                <StyledTableCell align="center">
                {/* <input
                 type="text"
                 placeholder="Filter by Status"
                 value={filters.status || ''}
                 onChange={(e) => handleFilterChange(e, 'status')}
               /> */}
                             <select
                value={filters.status || ''}
                onChange={(e) => handleDropdownFilterChange(e, 'status')}
              >
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Project Lead Approved">Project Lead Approved</option>
                <option value="Project Lead Rejected">Project Lead Rejected</option>
                <option value="Inventory Lead Approved">Inventory Lead Approved</option>
                <option value="Inventory Lead Rejected">Inventory Lead Rejected</option>
                <option value="Approved for Packaging">Approved for Packaging</option>
                <option value="Packer Rejected">Packer Rejected</option>
                <option value="Quality Lead Approved">Quality Lead Approved</option>
                <option value="Quality Lead Rejected">Quality Lead Rejected</option>

              </select>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
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

  );
}



