import React, {useState, useContext} from "react"
import Box from '@mui/material/Box';
// import "./PackerCheckList.css"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { locateContext } from '../../App';
import {  toast } from 'react-toastify';
  import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';






interface ComponentProps {
  listType: string;
}




const FlightCheckLists: React.FC<ComponentProps> = ({ listType }) => {
// export function GroundComponenetList({listtype}) {
    const { packerCheckList } = useContext(locateContext);

const [selectedOptionsGround, setSelectedOptionsGround] = useState({
    ground_check_list_1_yes:false,
    ground_check_list_1_no:false,
    ground_check_list_1:0,
    check_list_empty_1:"",
    ground_check_list_2_yes:false,
    ground_check_list_2_no:false,
    ground_check_list_2:0,
    check_list_empty_2:"",
    ground_check_list_3_yes:false,
    ground_check_list_3_no:false,
    ground_check_list_3:0,
    check_list_empty_3:"",
    ground_check_list_4_yes:false,
    ground_check_list_4_no:false,
    ground_check_list_4:0,
    check_list_empty_4:"",
    ground_check_list_5_yes:false,
    ground_check_list_5_no:false,
    ground_check_list_5:0,
    check_list_empty_5:"",
    ground_check_list_6_yes:false,
    ground_check_list_6_no:false,
    ground_check_list_6:0,
    check_list_empty_6:"",
    ground_check_list_7_yes:false,
    ground_check_list_7_no:false,
    ground_check_list_7:0,
    check_list_empty_7:"",
    ground_check_list_8_yes:false,
    ground_check_list_8_no:false,
    ground_check_list_8:0,
    check_list_empty_8:"",
    ground_check_list_9_yes:false,
    ground_check_list_9_no:false,
    ground_check_list_9:0,
    check_list_empty_9:"",
    ground_check_list_10_yes:false,
    ground_check_list_10_no:false,
    ground_check_list_10:0,
    check_list_empty_10:"",
    ground_check_list_11_yes:false,
    ground_check_list_11_no:false,
    ground_check_list_11:0,
    check_list_empty_11:"",
    ground_check_list_12_yes:false,
    ground_check_list_12_no:false,
    ground_check_list_12:0,
    check_list_empty_12:"",
    ground_check_list_13_yes:false,
    ground_check_list_13_no:false,
    ground_check_list_13:0,
    check_list_empty_13:"",
    ground_check_list_14_yes:false,
    ground_check_list_14_no:false,
    ground_check_list_14:0,
    check_list_empty_14:"",
    ground_check_list_15_yes:false,
    ground_check_list_15_no:false,
    ground_check_list_15:0,
    check_list_empty_15:"",
});


console.log(selectedOptionsGround.ground_check_list_1, "checkedValues")



const navigate = useNavigate();


    const [currentDate] = useState<string>('');
    // const [currentTime, setCurrentTime] = useState<string>('');
  
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);
    // const { updateDoc } = useFrappeUpdateDoc();

  
    
  
    // useEffect(() => {
    //   const now = new Date();
    //   const year = now.getFullYear();
    //   const month = String(now.getMonth() + 1).padStart(2, '0');
    //   const day = String(now.getDate()).padStart(2, '0');
    //   const hours = String(now.getHours()).padStart(2, "0");
    //   const minutes = String(now.getMinutes()).padStart(2, "0");
  
    //   const formattedDate = `${year}-${month}-${day}`;
    //   const formattedTime = `${hours}:${minutes}`;
  
    //   setCurrentTime(formattedTime)
    //   setCurrentDate(formattedDate);
    // }, []);



    // const updatePackagerequest = () => {
    //     let errorMessage = "";
    
    //           const formRaiseRequest = {
    //             ground_check_list_1: selectedOptionsGround.ground_check_list_1,
    //             ground_check_list_2: selectedOptionsGround.ground_check_list_2,
    //             ground_check_list_3: selectedOptionsGround.ground_check_list_3,
    //             ground_check_list_4: selectedOptionsGround.ground_check_list_4,
    //             ground_check_list_5: selectedOptionsGround.ground_check_list_5,
    //             ground_check_list_6: selectedOptionsGround.ground_check_list_6,
    //             ground_check_list_7: selectedOptionsGround.ground_check_list_7,
    //             ground_check_list_8: selectedOptionsGround.ground_check_list_8,
    //             ground_check_list_9: selectedOptionsGround.ground_check_list_9,
    //             ground_check_list_10: selectedOptionsGround.ground_check_list_10,
    //             ground_check_list_11: selectedOptionsGround.ground_check_list_11,
    //             ground_check_list_12:selectedOptionsGround.ground_check_list_12,
    //             updated_request:currentDate,
    //           };
    //             try {
    //                 //  updateDoc("Packaging Request", `${packerCheckList}`, formRaiseRequest);
    //                 // console.log("Document updated successfully ", packerCheckList);
    //                 console.log("Document updated successfully ");

    //                 toast.success("Submited  Successfully");
    //                 navigate("/Packaging_Management/viewreq")

    
    //               } catch (error) {
    //                 errorMessage = "There was an error while creating the document."
    //                 console.log("Error updating document:", error)
    //                 setErrorMsg(errorMessage);
    //                 setErrorSnackbarOpen(true);
    //                 console.error("Error updating document:", error);
    //               }                  
        
    //   };



      const updatePackagerequest = () => {
        console.log( "selectedOptions")
        let errorMessage = "";
    
        if ((!selectedOptionsGround.check_list_empty_1 ||
            !selectedOptionsGround.check_list_empty_2 ||
            !selectedOptionsGround.check_list_empty_3 ||
            !selectedOptionsGround.check_list_empty_4 ||
            !selectedOptionsGround.check_list_empty_5 ||
            !selectedOptionsGround.check_list_empty_6 ||
            !selectedOptionsGround.check_list_empty_7 ||
            !selectedOptionsGround.check_list_empty_8 ||
            !selectedOptionsGround.check_list_empty_9 ||
            !selectedOptionsGround.check_list_empty_10 ||
            !selectedOptionsGround.check_list_empty_11 ||
            !selectedOptionsGround.check_list_empty_12 ||
            !selectedOptionsGround.check_list_empty_13 ||
            !selectedOptionsGround.check_list_empty_14 ||
            !selectedOptionsGround.check_list_empty_15          
          )) {   

                errorMessage =
                "Please Select All Fields.";
                console.log(errorMessage, "errorMessage")
                setErrorMsg(errorMessage);
                setErrorSnackbarOpen(true);
            }else{
              const formRaiseRequest = {
                flight_check_list_1: selectedOptionsGround.ground_check_list_1,
                flight_check_list_2: selectedOptionsGround.ground_check_list_2,
                flight_check_list_3: selectedOptionsGround.ground_check_list_3,
                flight_check_list_4: selectedOptionsGround.ground_check_list_4,
                flight_check_list_5: selectedOptionsGround.ground_check_list_5,
                flight_check_list_6: selectedOptionsGround.ground_check_list_6,
                flight_check_list_7: selectedOptionsGround.ground_check_list_7,
                flight_check_list_8: selectedOptionsGround.ground_check_list_8,
                flight_check_list_9: selectedOptionsGround.ground_check_list_9,
                flight_check_list_10: selectedOptionsGround.ground_check_list_10,
                flight_check_list_11: selectedOptionsGround.ground_check_list_11,
                flight_check_list_12:selectedOptionsGround.ground_check_list_12,
                flight_check_list_13:selectedOptionsGround.ground_check_list_13,
                flight_check_list_14:selectedOptionsGround.ground_check_list_14,
                flight_check_list_15:selectedOptionsGround.ground_check_list_15,
                updated_request:currentDate,
              };
              console.log("formRaiseRequest ", formRaiseRequest);

                try {
                    //  updateDoc("Packaging Request", `${packerCheckList}`, formRaiseRequest);
                    console.log("Document updated successfully ", packerCheckList);
                    let message = packerCheckList + " - Submited successfully ";
                    toast.success(message);
                    navigate("/Packaging_Management/viewreq")
    
                  } catch (error) {
                    errorMessage = "There was an error while creating the document."
                    console.log("Error updating document:", error)
                    setErrorMsg(errorMessage);
                    setErrorSnackbarOpen(true);
                    console.error("Error updating document:", error);
                  }                  
        }
      };



    //   const [checkedValues, setCheckedValues] = useState({
    //     yes: false,
    //     no: false,
    //   });
    
    //   const handleCheckboxChange = (event) => {
    //     setCheckedValues({
    //       ...checkedValues,
    //       [event.target.value]: event.target.checked,
    //     });
    //   };
    const handleCloseSnack: (event: React.SyntheticEvent | Event, reason?: string) => void = (_event, reason) => {
        if (reason === 'clickaway') {
      return;
    }

    setErrorSnackbarOpen(false);
  };
    
return(
    <div style={{
      backgroundColor:"white",
      padding:"30px",
    }}>
         <Box >
              <div style={{
                    backgroundColor: "#A5D0A9",
                borderRadius:"5px",
                height:"5vh",
                paddingTop:"10px",

              }}>
              <h3 style={{
                display:"flex",
                justifyContent:"center",
                fontSize:"1.5vw",
              }}>
                {/* Ground Components */}
                {listType}
              </h3>
              </div>

              <br />


              <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>

        <div style={{
            width:"100%",
        }}>

        </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
            <div style={{
                fontWeight:"bold",
            }}>

                Yes
      </div>


      <div style={{
        fontWeight:"bold",
      }}>
No
      </div>

    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Wooden /Cotton box (No gaps, not damaged)
        </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">

<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_1_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_1_yes:true,
          ground_check_list_1_no:false,
          ground_check_list_1:1,
          check_list_empty_1:"yes",
      })}
    />
    {/* {selected ? 'Yes' : 'No'} */}
  </label>
  </div>


  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"

      checked={selectedOptionsGround.ground_check_list_1_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_1_yes:false,
          ground_check_list_1_no:true,
          ground_check_list_1:0,
          check_list_empty_1:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Cord strap
        </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">

<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_2_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_2_yes:true,
          ground_check_list_2_no:false,
          ground_check_list_2:1,
          check_list_empty_2:"yes",
      })}
    />
    {/* {selected ? 'Yes' : 'No'} */}
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_2_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_2_yes:false,
          ground_check_list_2_no:true,
          ground_check_list_2:0,
          check_list_empty_2:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>



    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Thick foam layer in all side of box
      </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_3_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_3_yes:true,
          ground_check_list_3_no:false,
          ground_check_list_3:1,
          check_list_empty_3:"yes",
      })}
    />
    {/* {selected ? 'Yes' : 'No'} */}
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_3_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_3_yes:false,
          ground_check_list_3_no:true,
          ground_check_list_3:0,
          check_list_empty_3:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Screw/nails for the box

       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_4_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_4_yes:true,
          ground_check_list_4_no:false,
          ground_check_list_4:1,
          check_list_empty_4:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_4_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_4_yes:false,
          ground_check_list_4_no:true,
          ground_check_list_4:0,
          check_list_empty_4:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Sealing the edges with tape
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_5_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_5_yes:true,
          ground_check_list_5_no:false,
          ground_check_list_5:1,
          check_list_empty_5:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_5_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_5_yes:false,
          ground_check_list_5_no:true,
          ground_check_list_5:0,
          check_list_empty_5:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Less than 70% of box with filled with parts and remaining 30% is filled
      with foam
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_6_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_6_yes:true,
          ground_check_list_6_no:false,
          ground_check_list_6:1,
          check_list_empty_6:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_6_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_6_yes:false,
          ground_check_list_6_no:true,
          ground_check_list_6:0,
          check_list_empty_6:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Fragile stickers
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_7_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_7_yes:true,
          ground_check_list_7_no:false,
          ground_check_list_7:1,
          check_list_empty_7:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_7_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_7_yes:false,
          ground_check_list_7_no:true,
          ground_check_list_7:0,
          check_list_empty_7:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Name/Address labels
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_8_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_8_yes:true,
          ground_check_list_8_no:false,
          ground_check_list_8:1,
          check_list_empty_8:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_8_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_8_yes:false,
          ground_check_list_8_no:true,
          ground_check_list_8:0,
          check_list_empty_8:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Part fully covered with shrink wrap and bubble wrap more than 3 layers
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_9_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_9_yes:true,
          ground_check_list_9_no:false,
          ground_check_list_9:1,
          check_list_empty_9:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_9_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_9_yes:false,
          ground_check_list_9_no:true,
          ground_check_list_9:0,
          check_list_empty_9:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Part doesn't shake inside the box(No free movement of the part inside the box)
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_10_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_10_yes:true,
          ground_check_list_10_no:false,
          ground_check_list_10:1,
          check_list_empty_10:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_10_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_10_yes:false,
          ground_check_list_10_no:true,
          ground_check_list_10:0,
          check_list_empty_10:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Add silica gel (if required)
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_11_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_11_yes:true,
          ground_check_list_11_no:false,
          ground_check_list_11:1,
          check_list_empty_11:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_11_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_11_yes:false,
          ground_check_list_11_no:true,
          ground_check_list_11:0,
          check_list_empty_11:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Put heavy items at bottom and light items on top
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_12_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_12_yes:true,
          ground_check_list_12_no:false,
          ground_check_list_12:1,
          check_list_empty_12:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_12_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_12_yes:false,
          ground_check_list_12_no:true,
          ground_check_list_12:0,
          check_list_empty_12:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Check recommended orientation and pack it accordingly
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_13_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_13_yes:true,
          ground_check_list_13_no:false,
          ground_check_list_13:1,
          check_list_empty_13:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_13_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_13_yes:false,
          ground_check_list_13_no:true,
          ground_check_list_13:0,
          check_list_empty_13:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Ensure packing is water resistant
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_14_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_14_yes:true,
          ground_check_list_14_no:false,
          ground_check_list_14:1,
          check_list_empty_14:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_14_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_14_yes:false,
          ground_check_list_14_no:true,
          ground_check_list_14:0,
          check_list_empty_14:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Ensure box is clean and no metal/wood dust is present inside
       </div>
        <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_15_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_15_yes:true,
          ground_check_list_15_no:false,
          ground_check_list_15:1,
          check_list_empty_15:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_15_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_15_yes:false,
          ground_check_list_15_no:true,
          ground_check_list_15:0,
          check_list_empty_15:"no",
      })}
    />
  </label>
  </div>
    </div>
    </div>




            </Box>
                
            <div className="button_style">
          <Button className="cancel_button" onClick={()=>navigate("/Packaging_Management/viewreq")} >
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

    </div>
)
}

export default FlightCheckLists;
