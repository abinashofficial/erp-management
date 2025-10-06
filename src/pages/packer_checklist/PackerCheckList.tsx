import React, {useState, useContext, useEffect} from "react"
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import "./PackerCheckList.css"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { locateContext } from '../../App';
// import { useFrappeUpdateDoc } from "frappe-react-sdk";
import {  toast } from 'react-toastify';
import FormControl from '@mui/material/FormControl';
import {
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
    Grid,
    FormGroup,
    Checkbox,
  } from "@mui/material";






interface ComponentProps {
  listType: string;
  action:string;
}
type StringMap = {
    [key: string]: boolean;
  };

  interface GroundComponent {
    ground_check_list_1: any;
    ground_check_list_2: any;
    ground_check_list_3: any;
    ground_check_list_4: any;
    ground_check_list_5: any;
    ground_check_list_6: any;
    ground_check_list_7: any;
    ground_check_list_8: any;
    ground_check_list_9: any;
    ground_check_list_10: any;
    ground_check_list_11: any;
    ground_check_list_12: any;
  }

const PackerCheckLists: React.FC<ComponentProps> = ({ listType , action}) => {
// export function GroundComponenetList({listtype}) {
    const { packerCheckList } = useContext(locateContext);

  const dontProps: string[] = ['Avoid reusing old boxes as they may have lost some of there rigidity ', 'Do not leave any empty space ', 'It should not be used to wrap heavyweight products', 'Do not leave empty space in the box component move in side the box '];
  const [stringMap, setStringMap] = useState([
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
]);

const [checkedValues, setCheckedValues] = useState({
    ground_check_list_1_yes:false,
    ground_check_list_1_no:false,
    ground_check_list_1:0,
    ground_check_list_2_yes:false,
    ground_check_list_2_no:false,
    ground_check_list_2:0,
    ground_check_list_3_yes:false,
    ground_check_list_3_no:false,
    ground_check_list_3:0,
    ground_check_list_4_yes:false,
    ground_check_list_4_no:false,
    ground_check_list_4:0,
    ground_check_list_5_yes:false,
    ground_check_list_5_no:false,
    ground_check_list_5:0,
    ground_check_list_6_yes:false,
    ground_check_list_6_no:false,
    ground_check_list_6:0,
    ground_check_list_7_yes:false,
    ground_check_list_7_no:false,
    ground_check_list_7:0,
    ground_check_list_8_yes:false,
    ground_check_list_8_no:false,
    ground_check_list_8:0,
    ground_check_list_9_yes:false,
    ground_check_list_9_no:false,
    ground_check_list_9:0,
    ground_check_list_10_yes:false,
    ground_check_list_10_no:false,
    ground_check_list_10:0,
    ground_check_list_11_yes:false,
    ground_check_list_11_no:false,
    ground_check_list_11:0,
    ground_check_list_12_yes:false,
    ground_check_list_12_no:false,
    ground_check_list_12:0,
    

});


const [laptopValue, setLaptopValue] = useState<string>("");


console.log(checkedValues.ground_check_list_1, "checkedValues")



const navigate = useNavigate();

const [selectedOptionsGround, setSelectedOptionsGround] = useState<GroundComponent>({
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
  });



  const componentListsDo: string[] = ['Wooden box (No gaps, not damaged), carton box if weight is less than 10kg.', 
  'Cord strap.',
  'Thick foam layer in all side of box',
  'Screw/nails for the box',
  'Sealing the edges with tape',
  'Less than 70% of box with filled with parts and remaining 30% is filled with foam.',
  'Fragile stickers',
  'Name/Address labels',
  'Part fully covered with shrink wrap and bubble wrap more than 3 layers',
  "Part doesn't shake inside the box(No free movement of the part inside the box)",
  "Add silica gel (if required)",
  "Put heavy items at bottom and light items on top"
]
  
const componentListItems = componentListsDo.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  const [selected, setSelected] = useState(false);

    // const props: string[] = ['Component should only occupy 70% of the box. ', 'Component should be at the center with packaging material surrounding. ', 'For corton box - maximum 15kgs always use wooden box. ', 'Box should be waterproof - Shrink wrap or taped properly or by other means, say tarpaulin. '];
    // const listItems = props.map((item, index) => (
    //   <li key={index}>{item}</li>
    // ));
    // const handleClickChange = (index: any) => {
    //     stringMap[index] = !stringMap[index] 
    //     console.log(stringMap[index],  "index", index)
    //   };

    const [currentDate, setCurrentDate] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<string>('');
  
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);
    // const { updateDoc } = useFrappeUpdateDoc();

  
    
  
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




      const updatePackagerequest = () => {
        // console.log(selectedOptions, "selectedOptions")
        let errorMessage = "";
    
        if ((!selectedOptionsGround.ground_check_list_1 ||
            !selectedOptionsGround.ground_check_list_2 ||
            !selectedOptionsGround.ground_check_list_3 ||
            !selectedOptionsGround.ground_check_list_4 ||
            !selectedOptionsGround.ground_check_list_5 ||
            !selectedOptionsGround.ground_check_list_6 ||
            !selectedOptionsGround.ground_check_list_7 ||
            !selectedOptionsGround.ground_check_list_8 ||
            !selectedOptionsGround.ground_check_list_9 ||
            !selectedOptionsGround.ground_check_list_10 ||
            !selectedOptionsGround.ground_check_list_11 ||
            !selectedOptionsGround.ground_check_list_12  )) {              
                errorMessage =
                "Please Select All Fields.";
                setErrorMsg(errorMessage);
                setErrorSnackbarOpen(true);
            }else{
              const formRaiseRequest = {
                ground_check_list_1: selectedOptionsGround.ground_check_list_1,
                ground_check_list_2: selectedOptionsGround.ground_check_list_2,
                ground_check_list_3: selectedOptionsGround.ground_check_list_3,
                ground_check_list_4: selectedOptionsGround.ground_check_list_4,
                ground_check_list_5: selectedOptionsGround.ground_check_list_5,
                ground_check_list_6: selectedOptionsGround.ground_check_list_6,
                ground_check_list_7: selectedOptionsGround.ground_check_list_7,
                ground_check_list_8: selectedOptionsGround.ground_check_list_8,
                ground_check_list_9: selectedOptionsGround.ground_check_list_9,
                ground_check_list_10: selectedOptionsGround.ground_check_list_10,
                ground_check_list_11: selectedOptionsGround.ground_check_list_11,
                ground_check_list_12:selectedOptionsGround.ground_check_list_12,
                updated_request:currentDate,
              };
                try {
                    //  updateDoc("Packaging Request", `${packerCheckList}`, formRaiseRequest);
                    console.log("Document updated successfully ", packerCheckList);
                    toast.success("Submited  Successfully");
    
                  } catch (error) {
                    errorMessage = "There was an error while creating the document."
                    console.log("Error updating document:", error)
                    setErrorMsg(errorMessage);
                    setErrorSnackbarOpen(true);
                    console.error("Error updating document:", error);
                  }                  
        }
      };

      const SelectOptionFun = (
        event: React.ChangeEvent<HTMLInputElement>,
        setValue: React.Dispatch<React.SetStateAction<string>>
      ) => {
        setValue(event.target.value);
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

    <br />




    {componentListsDo.map((item : String ,index:number) => (
        <div style={{
            display:"flex",
        }}>

        <div style={{
            width:"100%",
            fontWeight:"bold",
            gap:"30px",
        }}>
    <li key={index}>{item}</li>
    <br />

        </div>

        {stringMap[index]  === 0 && <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">

    <label>
        <input
          type="checkbox"
          className="custom-checkbox"

          checked={false}
        //   onChange={()=>handleClickChange(index)}
        />
        {/* {selected ? 'Yes' : 'No'} */}
      </label>
      </div>
            <div className="checkbox-container">
            <label>
              <input
                      className="custom-checkbox"
      
                type="checkbox"
                checked={true}
              //   onChange={()=>handleClickChange(index)}
              />
              {/* {selected ? 'Yes' : 'No'} */}
            </label>
            </div>
      




    </div>
}


{stringMap[index]  === 1 && <div style={{
            width:"8%",
            display:"flex",
            justifyContent:"space-between",
        }}>
             <div className="checkbox-container">

    <label>
        <input
          type="checkbox"
          className="custom-checkbox"

          checked={true}
        //   onChange={()=>handleClickChange(index)}
        />
        {/* {selected ? 'Yes' : 'No'} */}
      </label>
      </div>
            <div className="checkbox-container">
            <label>
              <input
                      className="custom-checkbox"
      
                type="checkbox"
                checked={false}
              //   onChange={()=>handleClickChange(index)}
              />
            </label>
            </div>
      




    </div>
}
    </div>


    ))}

            </Box>
                
    </div>
)
}

export default PackerCheckLists;
