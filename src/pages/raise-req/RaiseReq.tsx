import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useContext } from 'react';
import { locateContext } from '../../App';
// import { useFrappeCreateDoc } from 'frappe-react-sdk';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CommonDrawer.css';
import type { SelectChangeEvent } from "@mui/material/Select";
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';



interface SelectedOptions {
  category: string;
  transportFrom: string;
  transportTo: string;
  transportMode: string;
  purpose: string;
}

interface AvailableOptions {
  category: string[];
  transportFrom: string[];
  transportTo: string[];
  transportMode: string[];
}

export function RaiseRequest({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { empdetail , employeeRole} = useContext(locateContext);

  const [currentDate, setCurrentDate] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);
  // const { createDoc } = useFrappeCreateDoc();
  const navigate = useNavigate();

  

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}`;

    setCurrentTime(formattedTime)
    setCurrentDate(formattedDate);
  }, []);

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    category: '',
    transportFrom: '',
    transportTo: '',
    transportMode: '',
    purpose: '',
  });

  const [availableOptions, setAvailableOptions] = useState<{ [key: string]: string[] }>({
    category: ['Ground Components', 'Flight Components', 'Consumable Components'],
    transportFrom: ['Research Park (RF-1)', 'Thaiyur (Open Work Place-1)', 'Research Park (Open Work Place-2)', 'Sriharikota'],
    transportTo: ['Research Park (RF-1)', 'Thaiyur (Open Work Place-1)', 'Research Park (Open Work Place-2)', 'Sriharikota'],
    transportMode: ['Bike', 'Car', 'Bus', 'Van', 'Train', 'Ship', 'Flight'],
  });

  const [fieldOptions, setFieldOptions] = useState<{ [key: string]: string[] }>({
    category: ['Ground Components', 'Flight Components', 'Consumable Components'],
    transportFrom: ['Research Park (RF-1)', 'Thaiyur (Open Work Place-1)', 'Research Park (Open Work Place-2)', 'Sriharikota'],
    transportTo: ['Research Park (RF-1)', 'Thaiyur (Open Work Place-1)', 'Research Park (Open Work Place-2)', 'Sriharikota'],
    transportMode: ['Bike', 'Car', 'Bus', 'Van', 'Train', 'Ship', 'Flight'],
  });


  // Adjust the type of the 'label' parameter as needed
// Define event handler function for TextField
const handleTextFieldChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
  const selectedValue = event.target.value;
  console.log(selectedValue, "selectedValue")


  // Update selected options state
  setSelectedOptions((prevSelectedOptions) => ({
    ...prevSelectedOptions,
    ["purpose"]: selectedValue,
  }));

  // Update available options for subsequent labels
  setAvailableOptions((prevAvailableOptions) => {
    const updatedOptions = { ...prevAvailableOptions };

    // Remove the selected option from the available options
    Object.keys(updatedOptions).forEach((key) => {
      if (key !== "purpose") {
        updatedOptions[key] = updatedOptions[key].filter(
          (option) => option !== selectedValue
        );
      }
    });

    return updatedOptions;
  });  // Handle TextField change event here
};

  const handleChange = (label: string) => (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    // [fieldOptions, setFieldOptions] 
    setAvailableOptions(fieldOptions)

    setAvailableOptions((prevAvailableOptions) => {
      const updatedOptions = { ...prevAvailableOptions };
  
      // Remove the selected option from the available options
      Object.keys(updatedOptions).forEach((key) => {
        if (key !== label) {
          updatedOptions[key] = updatedOptions[key].filter(
            (option) => option !== selectedValue
          );
        }
      });
  
      return updatedOptions;
    });  // Handle TextFiel
    
    // Update selected options state
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [label]: selectedValue,
    }));
    // Update available options for subsequent labels

  };
   
  

  const updatePackagerequest = () => {
    console.log(selectedOptions)
    let errorMessage = "";
    let status = "Pending";
    if (employeeRole == "inventorylead"){
        status = "Inventory Lead Approved"
    }else if (employeeRole == "projectlead"){
        status = "Project Lead Approved"
    }

        if ((!selectedOptions.category || !selectedOptions.purpose || !selectedOptions.transportFrom || !selectedOptions.transportTo || !selectedOptions.transportMode)) {
          errorMessage =
            "Please Select All Fields.";
            setErrorMsg(errorMessage);
            setErrorSnackbarOpen(true);
        }else{
          const formRaiseRequest = {
            employee_id: empdetail.employee_id,
            employee_name: empdetail.employee_name,
            purpose: selectedOptions.purpose,
            package_type: selectedOptions.category,
            transport_from: selectedOptions.transportFrom,
            transport_to: selectedOptions.transportTo,
            transport_mode: selectedOptions.transportMode,
            created_request_date: currentDate,
            created_request_time: currentTime,
            status: status,
            updated_request: currentDate,
            reports_to:empdetail.reports_to,
            dashboard_status:"Pending",
            // created_time_stamp:new Date(),
          };
            // createDoc("Packaging Request", formRaiseRequest)
            // .then((document) => {
            //   console.log("Created Successfully Raise Request", document.name);
            //   let message = document.name + " Raised Successfully"
            //   toast.success(message);
            //   clearRaiseReqList();
            //   setTimeout(() => {
            //     navigate("/")
            //     window.location.reload();
            //   }, 5000);
            // })
            // .catch((error) => {
            //   console.log("Error in Creation", error);
            //   errorMessage = "There was an error while creating the document.";
            //   setErrorMsg(errorMessage);
            //   setErrorSnackbarOpen(true);
            // });     
                          console.log("Created Successfully Raise Request");
              let message = "Raised Successfully"
              toast.success(message);
              clearRaiseReqList();
              setTimeout(() => {
                navigate("/")
              }, 5000);
    }
  };

  const handleCloseSnack: (event: React.SyntheticEvent | Event, reason?: string) => void = (event, reason) => {
        if (reason === 'clickaway') {
      return;
    }

    setErrorSnackbarOpen(false);
  };

  const clearRaiseReqList = () => {

    setSelectedOptions({
      category: '',
      transportFrom: '',
      transportTo:'',
      transportMode:'',
      purpose:'',
    });

    onClose()
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Paper className="paper_width">

      <Button  onClick={clearRaiseReqList} >
    <CloseIcon />
      </Button>
        <div className="fields_gap">
          <h2>Raise Request</h2>
        </div>



        <div className="fields_gap">
          <FormControl className="req_fields">
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category"
              id="category-select"
              value={selectedOptions.category}
              onChange={handleChange('category')}
              label="Category"
            >
              {availableOptions.category.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="fields_gap">
        <TextField
    className="req_fields"
    id="outlined-basic"
    onChange={handleTextFieldChange} // Pass handleChange directly without invoking it
    label="Purpose"
    // value={selectedOptions.purpose}
    variant="outlined"
  />
        </div>

        <div className="fields_gap">
          <FormControl className="req_fields">
            <InputLabel id="transportFrom">Transport From</InputLabel>
            <Select
              labelId="transportFrom"
              id="transportFrom-select"
              value={selectedOptions.transportFrom}
              onChange={handleChange('transportFrom')}
              label="Transport from"
            >
              {availableOptions.transportFrom.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <FormControl className="req_fields">
            <InputLabel id="transportTo">Transport To</InputLabel>
            <Select
              labelId="transportTo"
              id="transportTo-select"
              value={selectedOptions.transportTo}
              onChange={handleChange('transportTo')}
              label="Transport To"
            >
              {availableOptions.transportTo.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="fields_gap">
          <FormControl className="req_fields">
            <InputLabel id="transportMode">Transport Mode</InputLabel>
            <Select
              labelId="transportMode"
              id="transportMode-select"
              value={selectedOptions.transportMode}
              onChange={handleChange('transportMode')}
              label="Transport Mode"
            >
              {availableOptions.transportMode.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="button_style">
          <Button className="cancel_button" onClick={onClose}>
            Cancel
          </Button>
          <Button className='submit_button' onClick={()=>updatePackagerequest()} variant="contained" >
            Submit
          </Button>
        </div>

        <div>
          <Snackbar
            open={errorSnackbarOpen}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleCloseSnack}
          >
            <Alert onClose={handleCloseSnack} severity="error" variant="filled" sx={{ width: '100%' }}>
              {errorMsg}
            </Alert>
          </Snackbar>
        </div>
      </Paper>

    </Drawer>
  );
}
