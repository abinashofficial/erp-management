import React from "react"
import Box from '@mui/material/Box';
import "./PackerCheckList.css"
  import { useLocation } from 'react-router-dom';




const QualityConsumableCheckLists: React.FC = () => {
// export function GroundComponenetList({listtype}) {
  const location = useLocation();
  const dataReceived = location.state || {};
console.log(dataReceived, "dataReceived")
  const componentListsDo: string[] = [
"Component should only occupy 70% of the box.",
"Component should be at the center with packaging material surrounding.",
"For carton box - maximum 15 kgs, beyond 15 kgs - always use wooden box.",
"Box should be waterproof - Shrink wrap or taped properly or by other means, say tarpaulin",
"Name and address (printed form) should be pasted below transparent tape and shrink wrap.",
"The wooden box/cardboard box should be secured with Cord Straps.",
"At some vendor places cord straps are not available, take information prior so that arrangements can be made",
"If possible ask for packaging documents for flight components from respective teams and cross check the packaging.",
"Base and sides of the box should be secured with foam - ask for photos.",
"If multiple products are in same box, no two components should touch each other. ",
"Strong packaging material includes high-quality corrugated cardboard box, packing tapes, Bubble wrap brown packing paper, foam sheet, etc.",
"To keep the items safe during the transit and journey to the desired destination, make sure to right box in respect to thickness and size",
"Wrap each item with a protective material such as bubble wrap, polythene foam or other insulating material.",
"Tape the bottom of the box, to provide extra strength to the box. Once done, place all the wrapped items into the box in the right way. Some items need to be placed upright in the box while some need to be laid down in the box",
"Seal the box completely from all sides especially along the edges, top, and bottom with box-sealing tape, packing tape or self-adhesive tapes.",
"Once securely packed make sure to label the parcel with “Fragile Handle with Care” tag as it reduces the risk of damage. Also, make sure to communicate with the carrier company that boxes contain fragile items and require extra care.",
"The accurate address is of utmost importance. Mention recipient’s name, address, postal code, contact no. very clearly on the parcel. Also, make sure to mention the sender’s detail on the outside as well as inside of the parcel.",
"Look out for the manufacturer stamp which tells you information about the construction type and strength of a box. Ask your box supplier for more information as required.",
"Choose a box with the right size for the content being shipped as under-filled  boxes may collapse and over-filled boxes may burst.",
"Always be sure that the void filler materials you choose will be able to hold the weight of your shipment's contents. Otherwise, some materials may deflate or sink, leaving empty  space within the box.",
"When using encapsulated-air plastic sheeting, use several layers to ensure that the entire product is protected, including corners and edges.",
"If you are transporting items, such as fragile glass bottles or ceramics, ensure that your  cardboard inserts are strong and suitable for long-term use.",
"When shipping multiple items in a single package, always wrap each item individually and separate with corrugated inserts or other divider materials as appropriate.",
"Avoid reusing old boxes as they may have lost some of their rigidity",
"Do not leave any empty space",
"It should not be used to wrap heavyweight products",
"Do not let other labels, tapes, or paperwork cover the shipment label"
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
                Consumable Components
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

export default QualityConsumableCheckLists;
