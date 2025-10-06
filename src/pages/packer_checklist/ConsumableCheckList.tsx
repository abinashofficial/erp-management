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




const ConsumableCheckLists: React.FC<ComponentProps> = ({ listType }) => {
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
    ground_check_list_16_yes:false,
    ground_check_list_16_no:false,
    ground_check_list_16:0,
    check_list_empty_16:"",
    ground_check_list_17_yes:false,
    ground_check_list_17_no:false,
    ground_check_list_17:0,
    check_list_empty_17:"",
    ground_check_list_18_yes:false,
    ground_check_list_18_no:false,
    ground_check_list_18:0,
    check_list_empty_18:"",
    ground_check_list_19_yes:false,
    ground_check_list_19_no:false,
    ground_check_list_19:0,
    check_list_empty_19:"",
    ground_check_list_20_yes:false,
    ground_check_list_20_no:false,
    ground_check_list_20:0,
    check_list_empty_20:"",
    ground_check_list_21_yes:false,
    ground_check_list_21_no:false,
    ground_check_list_21:0,
    check_list_empty_21:"",
    ground_check_list_22_yes:false,
    ground_check_list_22_no:false,
    ground_check_list_22:0,
    check_list_empty_22:"",
    ground_check_list_23_yes:false,
    ground_check_list_23_no:false,
    ground_check_list_23:0,
    check_list_empty_23:"",
    ground_check_list_24_yes:false,
    ground_check_list_24_no:false,
    ground_check_list_24:0,
    check_list_empty_24:"",
    ground_check_list_25_yes:false,
    ground_check_list_25_no:false,
    ground_check_list_25:0,
    check_list_empty_25:"",
    ground_check_list_26_yes:false,
    ground_check_list_26_no:false,
    ground_check_list_26:0,
    check_list_empty_26:"",
    ground_check_list_27_yes:false,
    ground_check_list_27_no:false,
    ground_check_list_27:0,
    check_list_empty_27:"",
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
            !selectedOptionsGround.check_list_empty_15 ||
            !selectedOptionsGround.check_list_empty_16 ||
            !selectedOptionsGround.check_list_empty_17 ||
            !selectedOptionsGround.check_list_empty_18 ||
            !selectedOptionsGround.check_list_empty_19 ||
            !selectedOptionsGround.check_list_empty_20 ||
            !selectedOptionsGround.check_list_empty_21 ||
            !selectedOptionsGround.check_list_empty_22 ||
            !selectedOptionsGround.check_list_empty_23 ||
            !selectedOptionsGround.check_list_empty_24 ||
            !selectedOptionsGround.check_list_empty_25 ||
            !selectedOptionsGround.check_list_empty_26 ||
            !selectedOptionsGround.check_list_empty_27 
          )) {   

                errorMessage =
                "Please Select All Fields.";
                console.log(errorMessage, "errorMessage")
                setErrorMsg(errorMessage);
                setErrorSnackbarOpen(true);
            }else{
              const formRaiseRequest = {
                consumable_check_list_1: selectedOptionsGround.ground_check_list_1,
                consumable_check_list_2: selectedOptionsGround.ground_check_list_2,
                consumable_check_list_3: selectedOptionsGround.ground_check_list_3,
                consumable_check_list_4: selectedOptionsGround.ground_check_list_4,
                consumable_check_list_5: selectedOptionsGround.ground_check_list_5,
                consumable_check_list_6: selectedOptionsGround.ground_check_list_6,
                consumable_check_list_7: selectedOptionsGround.ground_check_list_7,
                consumable_check_list_8: selectedOptionsGround.ground_check_list_8,
                consumable_check_list_9: selectedOptionsGround.ground_check_list_9,
                consumable_check_list_10: selectedOptionsGround.ground_check_list_10,
                consumable_check_list_11: selectedOptionsGround.ground_check_list_11,
                consumable_check_list_12:selectedOptionsGround.ground_check_list_12,
                consumable_check_list_13:selectedOptionsGround.ground_check_list_13,
                consumable_check_list_14:selectedOptionsGround.ground_check_list_14,
                consumable_check_list_15:selectedOptionsGround.ground_check_list_15,
                consumable_check_list_16:selectedOptionsGround.ground_check_list_16,
                consumable_check_list_17:selectedOptionsGround.ground_check_list_17,
                consumable_check_list_18:selectedOptionsGround.ground_check_list_18,
                consumable_check_list_19:selectedOptionsGround.ground_check_list_19,
                consumable_check_list_20:selectedOptionsGround.ground_check_list_20,
                consumable_check_list_21:selectedOptionsGround.ground_check_list_21,
                consumable_check_list_22:selectedOptionsGround.ground_check_list_22,
                consumable_check_list_23:selectedOptionsGround.ground_check_list_23,
                consumable_check_list_24:selectedOptionsGround.ground_check_list_24,
                consumable_check_list_25:selectedOptionsGround.ground_check_list_25,
                consumable_check_list_26:selectedOptionsGround.ground_check_list_26,
                consumable_check_list_27:selectedOptionsGround.ground_check_list_27,


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
Component should only occupy 70% of the box. 
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
Component should be at the center with packaging material surrounding.         </div>
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
For carton box - maximum 15 kgs, beyond 15 kgs - always use wooden box.        </div>
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
Box should be waterproof - Shrink wrap or taped properly or by other means, say tarpaulin.
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
Name and address (printed form) should be pasted below transparent tape and shrink wrap.       </div>
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
The wooden box/cardboard box should be secured with Cord Straps. 
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
At some vendor places cord straps are not available, take information prior so that arrangements
      can be made
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
If possible ask for packaging documents for flight components from respective teams and cross check
      the packaging.
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
Base and sides of the box should be secured with foam - ask for photos.       </div>
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
If multiple products are in same box, no two components should touch each other. 
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
Strong packaging material includes high-quality corrugated cardboard box, packing tapes, Bubble 
      wrap brown packing paper, foam sheet, etc.
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
To keep the items safe during the transit and journey to the desired destination, make sure to
      right box in respect to thickness and size
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
Wrap each item with a protective material such as bubble wrap, polythene foam or other insulating
      material.
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
Tape the bottom of the box, to provide extra strength to the box. Once done, place all the wrapped
      items into the box in the right way. Some items need to be placed upright in the box while some 
      need to be laid down in the box.
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
Seal the box completely from all sides especially along the edges, top, and bottom with box-sealing
      tape, packing tape or self-adhesive tapes.
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


    <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
        }}>
        <div style={{
            width:"100%",
            fontWeight:"bold",
        }}>
Once securely packed make sure to label the parcel with “Fragile Handle with Care” tag as it 
      reduces the risk of damage. Also, make sure to communicate with the carrier company that boxes
      contain fragile items and require extra care.
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
      checked={selectedOptionsGround.ground_check_list_16_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_16_yes:true,
          ground_check_list_16_no:false,
          ground_check_list_16:1,
          check_list_empty_16:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_16_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_16_yes:false,
          ground_check_list_16_no:true,
          ground_check_list_16:0,
          check_list_empty_16:"no",
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
The accurate address is of utmost importance. Mention recipient’s name, address, postal code,
      contact no. very clearly on the parcel. Also, make sure to mention the sender’s detail on the outside
      as well as inside of the parcel.
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
      checked={selectedOptionsGround.ground_check_list_17_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_17_yes:true,
          ground_check_list_17_no:false,
          ground_check_list_17:1,
          check_list_empty_17:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_17_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_17_yes:false,
          ground_check_list_17_no:true,
          ground_check_list_17:0,
          check_list_empty_17:"no",
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
Look out for the manufacturer stamp which tells you information about the construction type and
      strength of a box. Ask your box supplier for more information as required.             </div>
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
      checked={selectedOptionsGround.ground_check_list_18_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_18_yes:true,
          ground_check_list_18_no:false,
          ground_check_list_18:1,
          check_list_empty_18:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_18_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_18_yes:false,
          ground_check_list_18_no:true,
          ground_check_list_18:0,
          check_list_empty_18:"no",
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
Choose a box with the right size for the content being shipped as under-filled 
      boxes may collapse and over-filled boxes may burst.              </div>
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
      checked={selectedOptionsGround.ground_check_list_19_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_19_yes:true,
          ground_check_list_19_no:false,
          ground_check_list_19:1,
          check_list_empty_19:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_19_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_19_yes:false,
          ground_check_list_19_no:true,
          ground_check_list_19:0,
          check_list_empty_19:"no",
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
Always be sure that the void filler materials you choose will be able to hold the weight of your
      shipment's contents. Otherwise, some materials may deflate or sink, leaving empty  space
      within the box.
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
      checked={selectedOptionsGround.ground_check_list_20_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_20_yes:true,
          ground_check_list_20_no:false,
          ground_check_list_20:1,
          check_list_empty_20:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_20_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_20_yes:false,
          ground_check_list_20_no:true,
          ground_check_list_20:0,
          check_list_empty_20:"no",
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
When using encapsulated-air plastic sheeting, use several layers to ensure that the entire product
      is protected, including corners and edges.
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
      checked={selectedOptionsGround.ground_check_list_21_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_21_yes:true,
          ground_check_list_21_no:false,
          ground_check_list_21:1,
          check_list_empty_21:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_21_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_21_yes:false,
          ground_check_list_21_no:true,
          ground_check_list_21:0,
          check_list_empty_21:"no",
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
If you are transporting items, such as fragile glass bottles or ceramics, ensure that your  cardboard
      inserts are strong and suitable for long-term use.                   </div>
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
      checked={selectedOptionsGround.ground_check_list_22_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_22_yes:true,
          ground_check_list_22_no:false,
          ground_check_list_22:1,
          check_list_empty_22:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_22_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_22_yes:false,
          ground_check_list_22_no:true,
          ground_check_list_22:0,
          check_list_empty_22:"no",
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
When shipping multiple items in a single package, always wrap each item individually and separate
      with corrugated inserts or other divider materials as appropriate.                   </div>
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
      checked={selectedOptionsGround.ground_check_list_23_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_23_yes:true,
          ground_check_list_23_no:false,
          ground_check_list_23:1,
          check_list_empty_23:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_23_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_23_yes:false,
          ground_check_list_23_no:true,
          ground_check_list_23:0,
          check_list_empty_23:"no",
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
Avoid reusing old boxes as they may have lost some of their rigidity                   </div>
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
      checked={selectedOptionsGround.ground_check_list_24_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_24_yes:true,
          ground_check_list_24_no:false,
          ground_check_list_24:1,
          check_list_empty_24:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_24_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_24_yes:false,
          ground_check_list_24_no:true,
          ground_check_list_24:0,
          check_list_empty_24:"no",
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
Do not leave any empty space
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
      checked={selectedOptionsGround.ground_check_list_25_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_25_yes:true,
          ground_check_list_25_no:false,
          ground_check_list_25:1,
          check_list_empty_25:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_25_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_25_yes:false,
          ground_check_list_25_no:true,
          ground_check_list_25:0,
          check_list_empty_25:"no",
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
It should not be used to wrap heavyweight products.
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
      checked={selectedOptionsGround.ground_check_list_26_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_26_yes:true,
          ground_check_list_26_no:false,
          ground_check_list_26:1,
          check_list_empty_26:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_26_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_26_yes:false,
          ground_check_list_26_no:true,
          ground_check_list_26:0,
          check_list_empty_26:"no",
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
Do not let other labels, tapes, or paperwork cover the shipment label.                   </div>
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
      checked={selectedOptionsGround.ground_check_list_27_yes}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_27_yes:true,
          ground_check_list_27_no:false,
          ground_check_list_27:1,
          check_list_empty_27:"yes",
      })}
    />
  </label>
  </div>
  <div className="checkbox-container">
<label>
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={selectedOptionsGround.ground_check_list_27_no}
      onChange={()=> setSelectedOptionsGround({
        ...selectedOptionsGround,
          ground_check_list_27_yes:false,
          ground_check_list_27_no:true,
          ground_check_list_27:0,
          check_list_empty_27:"no",
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

export default ConsumableCheckLists;
