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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Service from '../../service/Service';
import { QualityLeadRequest } from '../track_req/QualityLeadReq';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { margin } from '@mui/system';






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
  }

export function QualityLeadApprovalRequest({ open, onClose, item }: { open: boolean; onClose: () => void ;item: Item}) {
    const { employeeRole, empdetail } = useContext(locateContext);
    console.log(employeeRole, "employeeRole")
    const [currentDate, setCurrentDate] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);
    // const { updateDoc } = useFrappeUpdateDoc();
    const [selectedImage, setSelectedImage] = useState(null);
    const [openReject, setOpenReject] = React.useState(false);
    const [rejectReason, setRejectReason] = useState<string>('');
    const [repack, setRepack] = React.useState(false);




  
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
        image_1:null,
        image_2:null,
        image_3:null,
        image_4:null,
        image_5:null,
        image_6:null,
    })
    console.log(properties.image_1, "properties.image_1")

    useEffect(() => {
        setProperties({
            category: item.package_type,
            transportFrom: item.transport_from,
            transportTo: item.transport_to,
            transportMode: item.transport_mode,
            purpose: item.purpose,
            image_1:item.image_1,
            image_2:item.image_2,
            image_3:item.image_3,
            image_4:item.image_4,
            image_5:item.image_5,
            image_6:item.image_6,
        })
        setSelectedImage(item.image_1)
      }, [item]);

      const updatePackagerequest = (action: string) => {
        let errorMessage = "";
        let toastMessage = ""
        let status = "Quality Lead "+ action;
        if (action === "Repack"){
          status = action;
        }
        toastMessage = status
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
        console.log(formRaiseRequest, "formRaiseRequest")
            try {
                // updateDoc("Packaging Request", `${item.name}`, formRaiseRequest);
                console.log("Document updated successfully ", item.name, status, empdetail.employee_name);
                onClose();
                toast.success(item.name + " - " + toastMessage+" Request successfully");


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
    
                      
        
      };
      const handleClickOpen = () => {
        setOpenReject(true);
      };
      const handleClose = () => {
        setOpenReject(false);
      };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>


      <Paper className="packer_paper_width">
              <div style={{
        
          margin:"30px",
        
      }}>
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

        <ImageList sx={{ width: 600, height: 250 }} variant="woven" cols={3} gap={8}>

        <div style={{
          display:"flex",
          // justifyContent: "space-around",
          flexDirection:"row",
          gap:"5px",
          marginTop:"20px",
          marginLeft:"5px"
        }}>
          <div>
          {properties.image_1 && (
                      <img
                        src={properties.image_1}
                        alt="Preview"
                        style={{ width: "15vw", height: "20vh" }}
                      />
                    )}

          </div>

          <div>
          {properties.image_2 && (
                      <img
                        src={properties.image_2}
                        alt="Preview"
                        style={{ width: "15vw", height: "20vh" }}
                      />
                    )}

          </div>

          <div>
          {properties.image_3 && (
                      <img
                        src={properties.image_3}
                        alt="Preview"
                        style={{ width: "15vw", height: "20vh" }}
                      />
                    )}

          </div>

          <div>
          {properties.image_4 && (
                      <img
                        src={properties.image_4}
                        alt="Preview"
                        style={{ width: "15vw", height: "20vh" }}
                      />
                    )}

          </div>

          <div>
          {properties.image_5 && (
                      <img
                        src={properties.image_5}
                        alt="Preview"
                        style={{ width: "15vw", height: "20vh" }}
                      />
                    )}

          </div>

          <div>
          {properties.image_6 && (
                      <img
                        src={properties.image_6}
                        alt="Preview"
                        style={{ width: "15vw", height: "20vh" }}
                      />
                    )}

          </div>


        </div>
        </ImageList>

        <div className="button_style">
      {/* <Button  className='cancel_button' onClick={()=>updatePackagerequest("Rejected")} >
        Reject 
      </Button> */}

<Button  className='cancel_button' onClick={handleClickOpen} >
        Reject 
      </Button>

      <Button  className='submit_button' onClick={()=>updatePackagerequest("Approved")} variant="contained">Approve 
     </Button>
     <Button  className='submit_button' onClick={()=>setRepack(!repack)} variant="contained">Repack 
     </Button>

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

      <Dialog
        // fullScreen={fullScreen}
        open={repack}
        onClose={()=>setRepack(!repack)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Repack this Request?"}
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
          <Button  onClick={()=>setRepack(!repack)}>
            Cancel
          </Button>
          <Button onClick={()=>updatePackagerequest("Repack")} >
            Repack
          </Button>
        </DialogActions>
      </Dialog>
            </div>

      </Paper>

    </Drawer>
  );
}
