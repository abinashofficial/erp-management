import React, { useState, useEffect } from 'react';
import type { ChangeEvent, FormEventHandler } from 'react';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputAdornment from "@mui/material/InputAdornment";

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
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CommonDrawer.css';
import type { SelectChangeEvent } from "@mui/material/Select";
import CloseIcon from '@mui/icons-material/Close';
// import { useFrappeUpdateDoc } from "frappe-react-sdk";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Typography from '@mui/material/Typography';


interface SelectedOptions {
  material_name: string;
  quantity: string;
}

// interface FileInputProps {
//   onChange: FormEventHandler<HTMLInputElement>;
// }

interface AvailableOptions {
  category: string[];
  transportFrom: string[];
  transportTo: string[];
  transportMode: string[];
}

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

  interface FileData {
    file: File;
    dataURL: string;
  }


export function PackerReportingRequest({ open, onClose, item }: { open: boolean; onClose: () => void ;item: Item}) {

  const [selectedFile1, setSelectedFile1] = useState<FileData | null>(null);
  const [selectedFile2, setSelectedFile2] = useState<FileData | null>(null);
  const [selectedFile3, setSelectedFile3] = useState<FileData | null>(null);
  const [selectedFile4, setSelectedFile4] = useState<FileData | null>(null);
  const [selectedFile5, setSelectedFile5] = useState<FileData | null>(null);
  const [selectedFile6, setSelectedFile6] = useState<FileData | null>(null);

  const { empdetail } = useContext(locateContext);
  const [currentDate, setCurrentDate] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    material_name: "",
    quantity: "",
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    console.log(field, "yiqqgcvcb")
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      
      // Define an onload function for the FileReader
      reader.onload = (e) => {
        if (e.target) { 
        // Once the file is loaded, e.target.result contains the data URL
        const dataURL = e.target.result as string;

      if (field === "selectedFile1") {
        setSelectedFile1({ file, dataURL });
      } else if (field === "selectedFile2") {
        setSelectedFile2({ file, dataURL });
      }else if (field === "selectedFile3") {
        setSelectedFile3({ file, dataURL });
      }else if (field === "selectedFile4") {
        setSelectedFile4({ file, dataURL });
      }else if (field === "selectedFile5") {
        setSelectedFile5({ file, dataURL });
      }else if (field === "selectedFile6") {
        setSelectedFile6({ file, dataURL });
      }
    }
  };
    reader.readAsDataURL(file);
    }
  };



  const handleLabelClick = (inputId: string) => {
    // This function can be used to trigger the file input click
    const fileInput = document.getElementById(inputId);
    if (fileInput) {
      fileInput.click();
    }
  };

    // const { updateDoc } = useFrappeUpdateDoc();





  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);
  }, []);




const handleTextFieldChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
  const selectedValue = event.target.value;
  console.log(selectedValue, "selectedValue")


  // Update selected options state
  setSelectedOptions((prevSelectedOptions) => ({
    ...prevSelectedOptions,
    ["material_name"]: selectedValue,
  }));
};

const handleTextFieldQuantityChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
  const selectedValue = event.target.value;
  console.log(selectedValue, "selectedValue")


  // Update selected options state
  setSelectedOptions((prevSelectedOptions) => ({
    ...prevSelectedOptions,
    ["quantity"]: selectedValue,
  }));
};

   
  

  const updatePackagerequest = () => {
    // console.log(selectedOptions, "selectedOptions")
    let errorMessage = "";

        if ((!selectedOptions.material_name || !selectedOptions.quantity  || !selectedFile1?.dataURL || !selectedFile2?.dataURL || !selectedFile3?.dataURL || !selectedFile4?.dataURL || !selectedFile5?.dataURL || !selectedFile6?.dataURL)) {
          errorMessage =
            "Please Select All Fields.";
            setErrorMsg(errorMessage);
            setErrorSnackbarOpen(true);
        }else{
          const formRaiseRequest = {
            material_name:selectedOptions.material_name,
            quantity:selectedOptions.quantity,
            image_1:selectedFile1?.dataURL,
            image_2:selectedFile2?.dataURL,
            image_3:selectedFile3.dataURL,
            image_4:selectedFile4.dataURL,
            image_5:selectedFile5.dataURL,
            image_6:selectedFile6.dataURL,
            status: "Packed",
            updated_request: currentDate,
            updated_by:empdetail.user_id,
          };
            try {
                //  updateDoc("Packaging Request", `${item.name}`, formRaiseRequest);
                console.log("Document updated successfully ", item.name);
                toast.success(item.name+ " - Reported successfully");
                clearRaiseReqList();
                setTimeout(() => {
onClose()
                }, 5000); 

              } catch (error) {
                errorMessage = "There was an error while creating the document."
                console.log("Error updating document:", error)
                setErrorMsg(errorMessage);
                setErrorSnackbarOpen(true);
                console.error("Error updating document:", error);
              }       
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
      material_name: '',
      quantity: '',
    });
    setSelectedFile1(null)
    setSelectedFile2(null)
    setSelectedFile3(null)
    setSelectedFile4(null)
    setSelectedFile5(null)
    setSelectedFile6(null)
    onClose()
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Paper className="packer_paper_width">
      <Button onClick={clearRaiseReqList} >
    <CloseIcon />
      </Button>
        <div className="fields_gap">
          <h2>Reporting</h2>
                  <div style={{
                    marginLeft:"30px",
        }}>

        </div>
        </div>



<div className="fields_gap">
        <TextField
    className="req_fields"
    id="outlined-basic"
    label={item.name}
    // value={selectedOptions.purpose}
    variant="outlined"
    disabled
  />
        </div>



        <div className="fields_gap">
        <TextField
    className="req_fields"
    id="outlined-basic"
    onChange={handleTextFieldChange} // Pass handleChange directly without invoking it
    label="Material Name"
    // value={selectedOptions.purpose}
    variant="outlined"
  />
        </div>

        <div className="fields_gap">
        <TextField
    className="req_fields"
    id="outlined-basic"
    onChange={handleTextFieldQuantityChange} // Pass handleChange directly without invoking it
    label="Quantity"
    // value={selectedOptions.purpose}
    variant="outlined"
  />
        </div>



        <div className="fields_gap">
<TextField
           label={
            <React.Fragment>
              {/* Image */}
              <Typography className="CodeStar">* Image (PNG , JPEG)</Typography>
            </React.Fragment>
          }
            // className={`inputsimage ${isImageEmpty ? "input-invalid" : ""}`}
            className="attach_fields"

            type="text"
            placeholder="Images"
            value={selectedFile1 ? selectedFile1.file.name : ""}
            
            onClick={() => handleLabelClick("fileInput1")}
                        InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachFileIcon
  onClick={() => handleLabelClick("fileInput1")}
                      className="AttachReporticon"
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              )
            }}
          />
         
          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput1"
                        name="image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(event) => handleFileChange(event, "selectedFile1")}               />
          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            marginLeft:"10px"
          }}>
          10%

          </div>
        </div>

        <div className="fields_gap">
<TextField
           label={
            <React.Fragment>
              <Typography className="CodeStar">* Image (PNG , JPEG)</Typography>
            </React.Fragment>
          }
            // className={`inputsimage ${isImageEmpty ? "input-invalid" : ""}`}
            className="attach_fields"

            type="text"
            placeholder="Images"
            value={selectedFile2 ? selectedFile2.file.name : ""}
            
            onClick={() => handleLabelClick("fileInput2")}
                        InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachFileIcon
  onClick={() => handleLabelClick("fileInput2")}
                      className="AttachReporticon"
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              )
            }}
          />
         
          <input
            type="file"
            id="fileInput2"
                        name="image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(event) => handleFileChange(event, "selectedFile2")}               />
          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            marginLeft:"10px"
          }}>
          20%

          </div>
        </div>

        <div className="fields_gap">
<TextField
           label={
            <React.Fragment>
              <Typography className="CodeStar">* Image (PNG , JPEG)</Typography>
            </React.Fragment>
          }
            // className={`inputsimage ${isImageEmpty ? "input-invalid" : ""}`}
            className="attach_fields"

            type="text"
            placeholder="Images"
            value={selectedFile3 ? selectedFile3.file.name : ""}
            
            onClick={() => handleLabelClick("fileInput3")}
                        InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachFileIcon
  onClick={() => handleLabelClick("fileInput3")}
                      className="AttachReporticon"
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              )
            }}
          />
         
          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput3"
                        name="image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(event) => handleFileChange(event, "selectedFile3")}               />
          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            marginLeft:"10px"
          }}>
          40%

          </div>
        </div>

        <div className="fields_gap">
<TextField
           label={
            <React.Fragment>
              <Typography className="CodeStar">* Image (PNG , JPEG)</Typography>
            </React.Fragment>
          }
            // className={`inputsimage ${isImageEmpty ? "input-invalid" : ""}`}
            className="attach_fields"

            type="text"
            placeholder="Images"
            value={selectedFile4 ? selectedFile4.file.name : ""}
            
            onClick={() => handleLabelClick("fileInput4")}
                        InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachFileIcon
  onClick={() => handleLabelClick("fileInput4")}
                      className="AttachReporticon"
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              )
            }}
          />
         
          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput4"
                        name="image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(event) => handleFileChange(event, "selectedFile4")}               />

          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            marginLeft:"10px"
          }}>
          60%

          </div>
        </div>


        <div className="fields_gap">
<TextField
           label={
            <React.Fragment>
              <Typography className="CodeStar">* Image (PNG , JPEG)</Typography>
            </React.Fragment>
          }
            // className={`inputsimage ${isImageEmpty ? "input-invalid" : ""}`}
            className="attach_fields"

            type="text"
            placeholder="Images"
            value={selectedFile5 ? selectedFile5.file.name : ""}
            
            onClick={() => handleLabelClick("fileInput5")}
                        InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachFileIcon
  onClick={() => handleLabelClick("fileInput5")}
                      className="AttachReporticon"
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              )
            }}
          />
         
          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput5"
                        name="image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(event) => handleFileChange(event, "selectedFile5")}               />

          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            marginLeft:"10px"
          }}>
          80%

          </div>
        </div>



        <div className="fields_gap_100">
<TextField
           label={
            <React.Fragment>
              <Typography className="CodeStar">* Image (PNG , JPEG)</Typography>
            </React.Fragment>
          }
            // className={`inputsimage ${isImageEmpty ? "input-invalid" : ""}`}
            className="attach_fields"

            type="text"
            placeholder="Images"
            value={selectedFile6 ? selectedFile6.file.name : ""}
            
            onClick={() => handleLabelClick("fileInput6")}
                        InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachFileIcon
  onClick={() => handleLabelClick("fileInput6")}
                      className="AttachReporticon"
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              )
            }}
          />
         
          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput6"
                        name="image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(event) => handleFileChange(event, "selectedFile6")}               />

          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            marginLeft:"10px"
          }}>
          100%

          </div>
        </div>

        <div className="button_style">
          <Button className="cancel_button" onClick={clearRaiseReqList}>
            Cancel
          </Button>
          <Button className='submit_button' onClick={updatePackagerequest} variant="contained" >
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
};
