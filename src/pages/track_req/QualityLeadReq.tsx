
import { useContext, useEffect } from "react";
import { locateContext } from "../../App";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// import "./QualityLeadReq.css"
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import CustomStepper from "../../component/stepper/Stepper";
import Box from '@mui/material/Box';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { QualityLeadApprovalRequest } from "../raise-req/QualityLeadApprovalReq";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
// import { PackerChecklistRequest } from "../raise-req/PackerCheckList";
import { useNavigate } from "react-router-dom";




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

  ground_check_list_1: any,
  ground_check_list_2: any,
  ground_check_list_3: any,
  ground_check_list_4: any,
  ground_check_list_5: any,
  ground_check_list_6: any,
  ground_check_list_7: any,
  ground_check_list_8: any,
  ground_check_list_9: any,
  ground_check_list_10: any,
  ground_check_list_11: any,
  ground_check_list_12: any,

  flight_check_list_1: any
  flight_check_list_2: any
  flight_check_list_3: any
  flight_check_list_4: any
  flight_check_list_5: any
  flight_check_list_6: any
  flight_check_list_7: any
  flight_check_list_8: any
  flight_check_list_9: any
  flight_check_list_10: any
  flight_check_list_11: any
  flight_check_list_12: any
  flight_check_list_13: any
  flight_check_list_14: any
  flight_check_list_15: any


  consumable_check_list_1: any,
  consumable_check_list_2: any,
  consumable_check_list_3: any,
  consumable_check_list_4: any,
  consumable_check_list_5: any,
  consumable_check_list_6: any,
  consumable_check_list_7: any,
  consumable_check_list_8: any,
  consumable_check_list_9: any,
  consumable_check_list_10: any,
  consumable_check_list_11: any,
  consumable_check_list_12: any,
  consumable_check_list_13: any,
  consumable_check_list_14: any,
  consumable_check_list_15: any,
  consumable_check_list_16: any,
  consumable_check_list_17: any,
  consumable_check_list_18: any,
  consumable_check_list_19: any,
  consumable_check_list_20: any,
  consumable_check_list_21: any,
  consumable_check_list_22: any,
  consumable_check_list_23: any,
  consumable_check_list_24: any,
  consumable_check_list_25: any,
  consumable_check_list_26: any,
  consumable_check_list_27: any,

}

export function QualityLeadRequest() {
  const [searchTerm, setSearchTerm] = useState('   Package Type');
    const { qualityApprovalRequestData} = useContext(locateContext);
  const [projectLeadStatus, setProjectLeadStatus] = useState(4);
  const [inventoryLeadStatus, setInventoryLeadStatus] = useState(4);
  const [packingStatus, setPackingStatus] = useState(4);
  const [qualityLeadStatus, setQualityLeadStatus] = useState(4);
  const [progressBarValue, setProgressBarValue] = useState(3);
  const [pendingLeadStatus, setPendingLeadStatus] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [flightCheckList, setFlightCheckList] = useState<any[]>([]);

  // const data = qualityApprovalRequestData // Provide your data here

  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [overallFilter, setOverallFilter] = useState<string>('');
  const [clickedRowIndex, setClickedRowIndex] = useState<number | null>(null);
  const navigate = useNavigate();


  const filteredRows = qualityApprovalRequestData.filter((row: any) => {
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
  const totalPages = Math.ceil(filteredRows.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredRows.length);
  const currentItems = filteredRows.slice(startIndex, endIndex);
  const [visibleReq, setVisiblereq] = useState(false);
  // const [checkList, setCheckList] = useState(false);

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
    ground_check_list_1: null,
    ground_check_list_2: null,
    ground_check_list_3: null,
    ground_check_list_4: null,
    ground_check_list_5: null,
    ground_check_list_6: null,
    ground_check_list_7: null,
    ground_check_list_8: null,
    ground_check_list_9: null,
    ground_check_list_10: null,
    ground_check_list_11: null,
    ground_check_list_12: null,



    flight_check_list_1: null,
    flight_check_list_2: null,
    flight_check_list_3: null,
    flight_check_list_4: null,
    flight_check_list_5: null,
    flight_check_list_6: null,
    flight_check_list_7: null,
    flight_check_list_8: null,
    flight_check_list_9: null,
    flight_check_list_10: null,
    flight_check_list_11: null,
    flight_check_list_12: null,
    flight_check_list_13: null,
    flight_check_list_14: null,
    flight_check_list_15: null,


    consumable_check_list_1: null,
    consumable_check_list_2: null,
    consumable_check_list_3: null,
    consumable_check_list_4: null,
    consumable_check_list_5: null,
    consumable_check_list_6: null,
    consumable_check_list_7: null,
    consumable_check_list_8: null,
    consumable_check_list_9: null,
    consumable_check_list_10: null,
    consumable_check_list_11: null,
    consumable_check_list_12: null,
    consumable_check_list_13: null,
    consumable_check_list_14: null,
    consumable_check_list_15: null,
    consumable_check_list_16: null,
    consumable_check_list_17: null,
    consumable_check_list_18: null,
    consumable_check_list_19: null,
    consumable_check_list_20: null,
    consumable_check_list_21: null,
    consumable_check_list_22: null,
    consumable_check_list_23: null,
    consumable_check_list_24: null,
    consumable_check_list_25: null,
    consumable_check_list_26: null,
    consumable_check_list_27: null,



  });





  const handleClick = (item: Item, index:any) => {
    // console.log(item, "item")
    setClickedRowIndex(index)



      if (item.status == "Packed"){

        setPackingStatus(1)
        setProjectLeadStatus(1)
        setInventoryLeadStatus(1)
        setQualityLeadStatus(4)
        setProgressBarValue(32)
        setPendingLeadStatus(1)

      }else if (item.status == "Repack"){

        setPackingStatus(1)
        setProjectLeadStatus(1)
        setInventoryLeadStatus(1)
        setQualityLeadStatus(4)
        setProgressBarValue(32)
        setPendingLeadStatus(1)

      }else if (item.status == "Quality Lead Approved"){
        setPackingStatus(1)
        setProjectLeadStatus(1)
        setInventoryLeadStatus(1)
        setQualityLeadStatus(1)
        setProgressBarValue(45)
        setPendingLeadStatus(1)

      }else if (item.status == "Quality Lead Rejected"){
        setPackingStatus(1)
        setProjectLeadStatus(1)
        setInventoryLeadStatus(1)
        setQualityLeadStatus(2)
        setProgressBarValue(32)
        setPendingLeadStatus(1)

      }
      else if (item.status == "Cancelled"){
        setPendingLeadStatus(2)
        setPackingStatus(4)
        setProjectLeadStatus(4)
        setInventoryLeadStatus(4)
        setQualityLeadStatus(4)
        setProgressBarValue(2)
      }
    // Your handle click logic here
  };

  useEffect(() => {
    if (currentItems && currentItems.length>0){
        handleClick(currentItems[0], 0)
      }
  }, []);



  const handleCheckboxChange = (index: number) => {
    const selectedIndex = selectedItems.indexOf(index);
    let newSelected: number[] = []; // Initialize as an empty array
  
    if (selectedIndex === -1) {
      newSelected = [...selectedItems, index]; // Add index to newSelected array
    } else if (selectedIndex === 0) {
      newSelected = selectedItems.slice(1); // Remove first element from selectedItems
    } else if (selectedIndex === selectedItems.length - 1) {
      newSelected = selectedItems.slice(0, -1); // Remove last element from selectedItems
    } else if (selectedIndex > 0) {
      newSelected = [
        ...selectedItems.slice(0, selectedIndex), // Elements before selectedIndex
        ...selectedItems.slice(selectedIndex + 1), // Elements after selectedIndex
      ];
    }
  
    setSelectedItems(newSelected);
    // Your handle checkbox change logic here
  };
  

const handleSelectAllClick = () => {
  if (selectedItems.length < currentItems.length) {
    // Select all items
    setSelectedItems(currentItems.map((item: Item, index: Number) => index));
  } else {
    // Deselect all items
    setSelectedItems([]);
  }
  // Your handle select all logic here
};

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

  // const filteredRows = data.filter((row: Item) =>
  //   Object.values(row).some((value) =>
  //     value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  // );

// // Assuming Row is the interface you've defined
// const filteredRows = currentItems.filter((row: Item) =>
//     row.name.toLowerCase().includes(searchTerm.toLowerCase())
// );

  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value);
  // };
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
      
    const checkList = (item: Item) => {
      // setAllCheckList(item)
      // console.log(item, "itemCheckList")

      if (item.package_type === "Ground Components"){
        let temp = [
          item.ground_check_list_1,
          item.ground_check_list_2,
          item.ground_check_list_3,
          item.ground_check_list_4,
          item.ground_check_list_5,
          item.ground_check_list_6,
          item.ground_check_list_7,
          item.ground_check_list_8,
          item.ground_check_list_9,
          item.ground_check_list_10,
          item.ground_check_list_11,
          item.ground_check_list_12,
         ]
        navigate("/Packaging_Management/checklist/groundcomponent", { state: temp })
      }else if(item.package_type === "Flight Components"){
              let temp = [
           item.flight_check_list_1,
           item.flight_check_list_2,
           item.flight_check_list_3,
           item.flight_check_list_4,
           item.flight_check_list_5,
           item.flight_check_list_6,
           item.flight_check_list_7,
           item.flight_check_list_8,
           item.flight_check_list_9,
           item.flight_check_list_10,
           item.flight_check_list_11,
           item.flight_check_list_12,
           item.flight_check_list_13,
           item.flight_check_list_14,
           item.flight_check_list_15,
          ]
        navigate("/Packaging_Management/checklist/flightcomponent" , { state: temp })
      }else if(item.package_type === "Consumable Components"){

        let temp = [
          item.consumable_check_list_1,
          item.consumable_check_list_2,
          item.consumable_check_list_3,
          item.consumable_check_list_4,
          item.consumable_check_list_5,
          item.consumable_check_list_6,
          item.consumable_check_list_7,
          item.consumable_check_list_8,
          item.consumable_check_list_9,
          item.consumable_check_list_10,
          item.consumable_check_list_11,
          item.consumable_check_list_12,
          item.consumable_check_list_13,
          item.consumable_check_list_14,
          item.consumable_check_list_15,
          item.consumable_check_list_16,
          item.consumable_check_list_17,
          item.consumable_check_list_18,
          item.consumable_check_list_19,
          item.consumable_check_list_20,
          item.consumable_check_list_21,
          item.consumable_check_list_22,
          item.consumable_check_list_23,
          item.consumable_check_list_24,
          item.consumable_check_list_25,
          item.consumable_check_list_26,
          item.consumable_check_list_27,


         ]
        navigate("/Packaging_Management/checklist/consumablecomponent" , { state: temp })
      }
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
                <select
                value={filters.transport_mode || ''}
                onChange={(e) => handleDropdownFilterChange(e, 'transport_mode')}
                className="filter_width"
              >
                <option value="">Transport Mode</option>
                <option value="Bike">Bike</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
                <option value="Van">Van</option>
                <option value="Train">Train</option>
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
                className="filter_width"
              >
                <option value="">Status</option>
                <option value="Packed">Packed</option>
                <option value="Repack">Repack</option>

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

                <StyledTableCell align="center">Request ID</StyledTableCell>
                <StyledTableCell align="center">Employee ID</StyledTableCell>
                <StyledTableCell align="center">Employee Name</StyledTableCell>
                <StyledTableCell align="center">Package Type</StyledTableCell>
                <StyledTableCell align="center">Transport Mode</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {currentItems.map((item: Item, index:number) => (
              // {currentItems.map((item: Item, index:number) => (
                <StyledTableRow hover key={index} onClick={() => handleClick(item, index)} 

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
                  <TableCell align="center">{item.transport_mode}</TableCell>

                  <TableCell align="center" >{item.status} </TableCell>
                  <TableCell align="right">
                    <div style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "8px"
                    }}>

                      {item.status === "Packed" ? (
  <VisibilityTwoToneIcon
    onClick={() => userAction(item)}
    style={{ cursor: 'pointer' }}
  />
) :         <VisibilityTwoToneIcon style={{ color: 'grey' }} />
}

{item.status === "Packed" ? (
  <InventoryOutlinedIcon
    onClick={() => checkList(item)}
    style={{ cursor: 'pointer' }}
  />
) :    <InventoryOutlinedIcon style={{ color: 'grey' }} />
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
      <QualityLeadApprovalRequest open={visibleReq} onClose={()=>userAction(selectItem)} item = {selectItem}/>
      {/* <PackerChecklistRequest open={checkList} onClose={()=>setCheckList(!checkList)} item = {selectItem}/> */}

    </div>
  );
}





// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';

// interface Row {
//   name: string;
//   calories: number;
//   fat: number;
//   carbs: number;
//   protein: number;
// }

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ): Row {
//   return { name, calories, fat, carbs, protein };
// }

// const rows: Row[] = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export  function QualityLeadRequest() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredRows = rows.filter(row =>
//     row.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <TextField
//         id="search"
//         label="Search"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//               <StyledTableCell align="right">Calories</StyledTableCell>
//               <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//               <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//               <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredRows.map((row: Row) => (
//               <StyledTableRow key={row.name}>
//                 <StyledTableCell component="th" scope="row">
//                   {row.name}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                 <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                 <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                 <StyledTableCell align="right">{row.protein}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }


