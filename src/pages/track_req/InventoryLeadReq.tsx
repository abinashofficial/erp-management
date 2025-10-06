
import { useContext, useEffect } from "react";
import { locateContext } from "../../App";
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// import "./InventoryLeadReq.css"
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import CustomStepper from "../../component/stepper/Stepper";
import Box from '@mui/material/Box';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { InventoryLeadDrawer } from "../raise-req/InventoryLeadDrawer";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';





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
}

export function InventoryRequest() {
    const { inventoryApprovalRequestData} = useContext(locateContext);
  const [projectLeadStatus, setProjectLeadStatus] = useState(4);
  const [inventoryLeadStatus, setInventoryLeadStatus] = useState(4);
  const [packingStatus, setPackingStatus] = useState(4);
  const [qualityLeadStatus, setQualityLeadStatus] = useState(4);
  const [progressBarValue, setProgressBarValue] = useState(3);
  const [pendingLeadStatus, setPendingLeadStatus] = useState(1);
  const [clickedRowIndex, setClickedRowIndex] = useState<number | null>(null);


  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedItems, setSelectedItems] = useState<number[]>([]);
  // // const data = inventoryApprovalRequestData // Provide your data here
  // const [searchTerm, setSearchTerm] = useState('');

  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [overallFilter, setOverallFilter] = useState<string>('');


  const filteredRows = inventoryApprovalRequestData.filter((row: any) => {
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


  const totalPages = Math.ceil(filteredRows.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredRows.length);
  const currentItems = filteredRows.slice(startIndex, endIndex);
  const [visibleReq, setVisiblereq] = useState(false);
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
  });





  const handleClick = (item: Item, index:any) => {
    setClickedRowIndex(index)

    if (item.status == "Pending"){
      setProjectLeadStatus(4)
      setProgressBarValue(4)
      setPackingStatus(4)
      setQualityLeadStatus(4)
      setInventoryLeadStatus(4)
      setPendingLeadStatus(1)

    } else if (item.status == "Project Lead Approved"){
      setProjectLeadStatus(1)
      setPackingStatus(4)
      setQualityLeadStatus(4)
      setInventoryLeadStatus(4)
      setProgressBarValue(16)
      setPendingLeadStatus(1)

    }else if (item.status == "Project Lead Rejected"){
      setProjectLeadStatus(2)
      setPackingStatus(4)
      setQualityLeadStatus(4)
      setInventoryLeadStatus(4)
      setProgressBarValue(16)
      setPendingLeadStatus(1)

    }else if (item.status == "Inventory Lead Approved"){
      setProjectLeadStatus(1)
      setInventoryLeadStatus(1)
      setPackingStatus(4)
      setQualityLeadStatus(4)
      setProgressBarValue(24)
      setPendingLeadStatus(1)

    }else if (item.status == "Inventory Lead Rejected"){
      setProjectLeadStatus(1)
      setInventoryLeadStatus(2)
      setPackingStatus(4)
      setQualityLeadStatus(4)
      setProgressBarValue(16)
      setPendingLeadStatus(1)
    }
    // Your handle click logic here
  };

  useEffect(() => {
    if (currentItems && currentItems.length>0){
        handleClick(currentItems[0], 0)
        // console.log(currentItems[0])
      }
  }, []);



  // const handleCheckboxChange = (index: number) => {
  //   const selectedIndex = selectedItems.indexOf(index);
  //   let newSelected: number[] = []; // Initialize as an empty array
  
  //   if (selectedIndex === -1) {
  //     newSelected = [...selectedItems, index]; // Add index to newSelected array
  //   } else if (selectedIndex === 0) {
  //     newSelected = selectedItems.slice(1); // Remove first element from selectedItems
  //   } else if (selectedIndex === selectedItems.length - 1) {
  //     newSelected = selectedItems.slice(0, -1); // Remove last element from selectedItems
  //   } else if (selectedIndex > 0) {
  //     newSelected = [
  //       ...selectedItems.slice(0, selectedIndex), // Elements before selectedIndex
  //       ...selectedItems.slice(selectedIndex + 1), // Elements after selectedIndex
  //     ];
  //   }
  
  //   setSelectedItems(newSelected);
  //   // Your handle checkbox change logic here
  // };
  

// const handleSelectAllClick = () => {
//   if (selectedItems.length < currentItems.length) {
//     // Select all items
//     setSelectedItems(currentItems.map((item: Item, index: Number) => index));
//   } else {
//     // Deselect all items
//     setSelectedItems([]);
//   }
//   // Your handle select all logic here
// };

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

  const userAction = (item: Item) => {
        setVisiblereq(!visibleReq)
        setSelectItem(item)
  };
  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value);
  // };

//   // Assuming Row is the interface you've defined
// const filteredRows = currentItems.filter((row: Item) =>
//   row.name.toLowerCase().includes(searchTerm.toLowerCase())
// );

      // Function to handle overall filter change
      const handleOverallFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setOverallFilter(value);
      };
    
    
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
    
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
                  <TextField
        id="search"
        label="Search"
        value={overallFilter}
        style={{
          width:"40vh",
        }}
        onChange={handleOverallFilterChange}
      />
      <Box>
        <div>
                    <CustomStepper ProgressBarValue={progressBarValue} NumberOfDiv={38} projectLeadStatus={projectLeadStatus} inventoryLeadStatus={inventoryLeadStatus} packingStatus={packingStatus} qualityLeadStatus={qualityLeadStatus} pendingLeadStatus={pendingLeadStatus} />
          
          {/* {labelStatus && <CustomStepper ProgressBarValue={progressBarValue} NumberOfDiv={38} projectLeadStatus={projectLeadStatus} inventoryLeadStatus={inventoryLeadStatus} packingStatus={packingStatus} qualityLeadStatus={qualityLeadStatus} />
          } */}
        </div>
      </Box>

      <div style={{
              backgroundColor:"white",
              padding:"20px",
              borderRadius:"5px",
      }}>

        <TableContainer component={Paper}>
          <Table>
            <TableHead className='test'>

            <TableRow  >
                {/* <TableCell>
                  <Checkbox
                    indeterminate={selectedItems.length > 0 && selectedItems.length < currentItems.length}
                    checked={selectedItems.length === currentItems.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell> */}
                                <StyledTableCell align="center"></StyledTableCell>

                <StyledTableCell>
                <input
                 type="text"
                 placeholder="Request ID"
                 value={filters.name || ''}
                 onChange={(e) => handleFilterChange(e, 'name')}
                 className="filter_width"
               />
                </StyledTableCell>
                <StyledTableCell align="center">
                <input
                 type="text"
                 placeholder="Employee ID"
                 value={filters.employee_id || ''}
                 onChange={(e) => handleFilterChange(e, 'employee_id')}
                 className="filter_width"

               />
                </StyledTableCell>
                <StyledTableCell align="center">
                <input
                 type="text"
                 placeholder="Employee Name"
                 value={filters.employee_name || ''}
                 onChange={(e) => handleFilterChange(e, 'employee_name')}
                 className="filter_width"

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
                value={filters.package_type || ''}
                onChange={(e) => handleDropdownFilterChange(e, 'package_type')}
                className="filter_width"

              >
                <option value="">Package Type</option>
                <option value="Ground Components">Ground Components</option>
                <option value="Flight Components">Flight Components</option>
                <option value="Consumable Components">Consumable Components</option>
                
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
                className="filter_width"
              >
                <option value="">Status</option>
                <option value="Project Lead Approved">Project Lead Approved</option>
                <option value="Inventory Lead Approved">Inventory Lead Approved</option>
                <option value="Inventory Lead Rejected">Inventory Lead Rejected</option>
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
                <StyledTableCell align="center">Request ID</StyledTableCell>
                <StyledTableCell align="center">Employee ID</StyledTableCell>
                <StyledTableCell align="center">Employee Name</StyledTableCell>
                <StyledTableCell align="center">Package Type</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((item: Item, index:number) => (
                <StyledTableRow key={index} onClick={() => handleClick(item,index)}
                sx={{ cursor: 'pointer',  '&.Mui-selected': { backgroundColor: '#D5E2FF' }}}
                selected= {clickedRowIndex === index}

                 >
                  {/* <TableCell>
                    <Checkbox
                      checked={selectedItems.indexOf(index) !== -1}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </TableCell> */}
                  <TableCell align="center" >{index+1}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center" >{item.employee_id}</TableCell>
                  <TableCell align="center">{item.employee_name}</TableCell>
                  <TableCell align="center">{item.package_type}</TableCell>
                  <TableCell align="center" >{item.status} </TableCell>
                  <TableCell align="center">
                    <div style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "8px"
                    }}>
                      {/* <VisibilityTwoToneIcon onClick={()=>userAction(item)}/> */}
                      {item.status === "Project Lead Approved" ? (
  <VisibilityTwoToneIcon
    onClick={() => userAction(item)}
    style={{ cursor: 'pointer' }}
  />
) :         <VisibilityTwoToneIcon style={{ color: 'grey' }} />
}

                    </div>
                  </TableCell>
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

      <InventoryLeadDrawer open={visibleReq} onClose={()=>userAction(selectItem)} item = {selectItem}/>
      {/* <EditRequest open={editReq} onClose={()=>userAction(selectItem,"edit",false)} item = {selectItem}/> */}


    </div>
  );
}












