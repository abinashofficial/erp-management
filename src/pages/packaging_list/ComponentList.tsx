import React from "react"
import Box from '@mui/material/Box';
import "./CommonPackageList.css"

interface ComponentProps {
  listType: string;
}

const ComponenetLists: React.FC<ComponentProps> = ({ listType }) => {
// export function GroundComponenetList({listtype}) {

  const dontProps: string[] = ['Avoid reusing old boxes as they may have lost some of there rigidity ', 'Do not leave any empty space ', 'It should not be used to wrap heavyweight products', 'Do not leave empty space in the box component move in side the box '];
  const donttListItems = dontProps.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  const componentListsDo: string[] = ['Component should only occupy 70% of the box.', 'Component should be at the center with packaging material surrounding. ', 'For carton box - maximum 15 kgs, beyond 15 kgs - always use wooden box. ', 
'Box should be waterproof - Shrink wrap or taped properly or by other means, say tarpaulin', "Name and address (printed form) should be pasted below transparent tape and shrink wrap The accurate address is of utmost importance. Mention recipient’s name, address, postal code, contact no. very clearly on the parcel. Also, make sure to mention the sender’s detail on the outside as well as inside of the parcel.", 
'The wooden box/cardboard box should be secured with Cord Straps.', 'At some vendor places cord straps are not available, take information prior so that arrangements can be made' , 'If possible ask for packaging documents for flight components from respective teams and cross check the packaging.', "Base and sides of the box should be secured with foam - ask for photos.",
"If multiple products are in same box, no two components should touch each other.", "Wrap each item with a protective material such as bubble wrap, polythene foam or other insulating material.", "Tape the bottom of the box, to provide extra strength to the box. Once done, place all the wrapped items into the box in the right way. Some items need to be placed upright in the box while some need to be laid down in the box",
"Seal the box completely from all sides especially along the edges, top, and bottom with box-sealing tape, packing tape or self-adhesive tapes. ", "Once securely packed make sure to label the parcel with “Fragile Handle with Care” tag as it reduces the risk of damage. Also, make sure to communicate with the carrier company that boxes contain fragile items and require extra care.", ]
  
const componentListItems = componentListsDo.map((item, index) => (
    <li key={index}>{item}</li>
  ));

    // const props: string[] = ['Component should only occupy 70% of the box. ', 'Component should be at the center with packaging material surrounding. ', 'For corton box - maximum 15kgs always use wooden box. ', 'Box should be waterproof - Shrink wrap or taped properly or by other means, say tarpaulin. '];
    // const listItems = props.map((item, index) => (
    //   <li key={index}>{item}</li>
    // ));
return(
    <div style={{
      backgroundColor:"white",
      padding:"20px",
    }}>
            <Box >
              <div style={{
                    backgroundColor: "#A5D0A9",
                borderRadius:"5px",
                height:"5vh",
                paddingTop:"10px",

              }}>
              <h3 className="headerstyle">
                {/* Ground Components */}
                {listType}
              </h3>
              </div>

              <h3 className="descriptionstyle">
                Do's
              </h3>
              <ul className='order_list'>
                {componentListItems}
              </ul>
              <h3 className="descriptionstyle">
                Dont's
              </h3>
              <ul className='order_list'>
                {donttListItems}
              </ul>

            </Box>
    </div>
)
}

export default ComponenetLists;
