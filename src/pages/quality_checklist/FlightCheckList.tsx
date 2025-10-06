import React from "react"
import Box from '@mui/material/Box';
import "./PackerCheckList.css"
// import { useNavigate } from "react-router-dom";

  import { useLocation } from 'react-router-dom';





const QualityFlightCheckLists: React.FC = () => {
// export function GroundComponenetList({listtype}) {
  const location = useLocation();
  const dataReceived = location.state || {};
console.log(dataReceived, "dataReceived")
  const componentListsDo: string[] = [
"Wooden /Cotton box (No gaps, not damaged)",
"Cord strap",
"Thick foam layer in all side of box",
"Screw/nails for the box ",
"Sealing the edges with tape",
"Less than 70% of box with filled with parts and remaining 30% is filled with foam",
"Fragile stickers",
"Name/Address labels",
"Part fully covered with shrink wrap and bubble wrap more than 3 layers",
"Part doesn't shake inside the box(No free movement of the part inside the box)",
"Add silica gel (if required)",
"Put heavy items at bottom and light items on top",
"Check recommended orientation and pack it accordingly",
"Ensure packing is water resistant",
"Ensure box is clean and no metal/wood dust is present inside"
]
  

  
    





    
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
                Flight Components
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

        {dataReceived[index]  === false && <div style={{
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


{dataReceived[index]  === true && <div style={{
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

export default QualityFlightCheckLists;
