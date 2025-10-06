import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import 'react-toastify/dist/ReactToastify.css';
import './CommonDrawer.css';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { locateContext } from '../../App';
// import { useFrappeUpdateDoc } from "frappe-react-sdk";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




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

export function ProjectLeadApprovalRequest({ open, onClose, item }: { open: boolean; onClose: () => void ;item: Item}) {
    const { employeeRole, empdetail } = useContext(locateContext);
    console.log(employeeRole, "employeeRole")
    const [currentDate, setCurrentDate] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);
    // const { updateDoc } = useFrappeUpdateDoc();
    const [openReject, setOpenReject] = React.useState(false);
    const [rejectReason, setRejectReason] = useState<string>('');


  
    useEffect(() => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
  
      const formattedDate = `${year}-${month}-${day}`;
      setCurrentDate(formattedDate);
    }, []);



    const [properties, setProperties] = useState({
        category: 'Category',
        transportFrom: 'Transport From',
        transportTo:'Transport To',
        transportMode:'Transport Mode',
        purpose:'Purpose',
    })

    useEffect(() => {
        setProperties({
            category: item.package_type,
            transportFrom: item.transport_from,
            transportTo: item.transport_to,
            transportMode: item.transport_mode,
            purpose: item.purpose,
        })
      }, [item]);

      const updatePackagerequest = (action: string) => {
        let errorMessage = "";
        let status = "Project Lead "+ action;
        let dashboardStatus = "Pending";
        if (action === "Rejected"){ 
          dashboardStatus = "Cancelled";
        }
        
        const formRaiseRequest = {
            status: status,
            updated_request: currentDate,
            updated_by: empdetail.employee_name,
            reject_reason:rejectReason,
            dashboard_status: dashboardStatus,
        };
            try {
                // updateDoc("Packaging Request", `${item.name}`, formRaiseRequest);
                console.log("Document updated successfully ", item.name, status, empdetail.employee_name);
                toast.success(status+" Successfully");
                onClose();
                setTimeout(() => {
                  // navigate("/Packaging_Management/trackreq")

onClose()
                }, 5000);

            } catch (error) {
                errorMessage = "There was an error while creating the document."
                console.log("Error updating document:", error)
                setErrorMsg(errorMessage);
                setErrorSnackbarOpen(true);
                console.error("Error updating document:", error);
            }
    
                      
        
      };

      const handleClickOpen = () => {
        setOpenReject(true);
      };
      const handleClose = () => {
        setOpenReject(false);
      };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Paper className="paper_width">
      <Button  style={{
    justifyContent:"flex-end",
  }} onClick={onClose} >
    <CloseIcon />
      </Button>
        <div className="fields_gap">
          <h2>Request for Approval</h2>
        </div>

        <div className="fields_gap">
          <FormControl className="req_fields">
            <InputLabel id="category">{properties.category}</InputLabel>
            <Select
              labelId="category"
              id="category-select"
              label="Category"
              disabled
            >
            </Select>
          </FormControl>
        </div>

        <div className="fields_gap">
        <TextField
    className="req_fields"
    id="outlined-basic"
    label={properties.purpose}
    variant="outlined"
    disabled
  />
        </div>

        <div className="fields_gap">
          <FormControl className="req_fields">
            <InputLabel id="transportFrom">{properties.transportFrom}</InputLabel>
            <Select
              labelId="transportFrom"
              id="transportFrom-select"
              label="Transport from"
              disabled
            >
            </Select>
          </FormControl>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <FormControl className="req_fields">
            <InputLabel id="transportTo">{properties.transportTo}</InputLabel>
            <Select
              labelId="transportTo"
              id="transportTo-select"
              label="Transport To"
              disabled
            >
            </Select>
          </FormControl>
        </div>

        <div className="fields_gap">
          <FormControl className="req_fields">
            <InputLabel id="transportMode">{properties.transportMode}</InputLabel>
            <Select
              labelId="transportMode"
              id="transportMode-select"
              label="Transport Mode"
              disabled
            >
            </Select>
          </FormControl>
        </div>
        <div className="button_style">
        <Button  className='cancel_button' onClick={handleClickOpen} >
        Reject 
      </Button>
      
      


<Button  className= "submit_button" onClick={()=>updatePackagerequest("Approved")} variant="contained">Approve</Button>
        </div>

        <Dialog
        // fullScreen={fullScreen}
        open={openReject}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Reject this Request?"}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Once deleted it can't retrieve.
          </DialogContentText> */}
                  <TextField
          id="outlined-multiline-static"
          label="Reason"
          multiline
          rows={4}
          value={rejectReason}
          onChange={(event) => setRejectReason(event.target.value)}
        />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={()=>updatePackagerequest("Rejected")} autoFocus>
            Reject
          </Button>
        </DialogActions>
      </Dialog>
      </Paper>
    </Drawer>
  );
}
