import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import PackageGif from "../../assets/package_gif.json";
import Checkbox from "../../assets/Layer_1-Packaging.png";

import Lottie from "lottie-react";
import Paper from '@mui/material/Paper';
import vector from "../../assets/Vector.png"
import { BsArrowRight } from "react-icons/bs";
import Dialog from '@mui/material/Dialog';
import "./LandingPage.css"
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); 

export function LandingPage() {
  const props: string[] = ['Component should only occupy 70% of the box. ', 'Component should be at the center with packaging material surrounding. ', 'For corton box - maximum 15kgs always use wooden box. ', 'Box should be waterproof - Shrink wrap or taped properly or by other means, say tarpaulin. '];
  const listItems = props.map((item, index) => (
    <li key={index}>{item}</li>
  ));

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

  const [open, setOpen] = React.useState(false);
  const [component, setComponent] = React.useState('');

  const handleClickOpen = (scrollType: string) => () => {
    setOpen(true);
    setComponent(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [drawer2Open, setDrawer2Open] = React.useState(false);


  const toggleDrawer2 = () => {
    setDrawer2Open(!drawer2Open)
  };


    return (
      <Box  display="flex" flexDirection={{ xs: 'column', md: 'row' }}
      >


        <div className='border_title'>
          <Box display="grid" gap={2} className='title_pg'  gridTemplateColumns={{ xs: '1fr', md: 'repeat(12, 1fr)' }}>
            <Box gridColumn={{ xs: 'span 12', md: 'span 8' }} className='titlel'>
                                <Box className='title' sx={{
          fontSize: { xs: '24px', sm: '28px', xl: '32px' }, // Adjust font size for different screen sizes
        }}>
          <h2 style={{
            marginLeft:"30px"
          }}>
          Welcome To Package Management

          </h2>
                </Box>
              {/* <Item > */}
                <div className='title'> 
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem cum error, incidunt beatae aspernatur quae odio vel quia repellendus nam saepe exercitationem quidem doloribus maxime maiores veritatis quibusdam temporibus.
                  </p>
                  <div className='pic'>
                    <div className='lpic'>
                      <Lottie animationData={PackageGif} />
                    </div>
                  </div>
                </div>
              {/* </Item> */}
            </Box>
            <Box gridColumn={{ xs: 'span 12', md: 'span 4' }} className='right_end_pic' >
              <img  src={Checkbox} alt="humanImage"   /> 
            </Box>
          </Box>
          

          <Box style={{
            display:"flex",
            justifyContent:"space-around",
            marginTop:"30px",
            gap:"30px",
          }}             flexDirection={{ xs: 'column', md: 'row' }}
          >
            <Box className='boxes' flex={1} >
              <h3>
                <img style={{ marginRight:"10px" }} src={vector} alt="humanImage"  />
                Ground Components
              </h3>
              <ul className='order_list_description'>
                {listItems}
              </ul>
              <div className='box_view_all'>
                <p onClick={handleClickOpen("Ground Components")} className='view_all_text'> View All <BsArrowRight  size={20}/></p>
              </div>
            </Box>


            <Box flex={1}  className='boxes'>
              <h3>
                <img style={{ marginRight:"10px" }} src={vector} alt="humanImage"  />
                Flight Components
              </h3>
              <ul className='order_list_description'>
                {listItems}
              </ul>
              <div className='box_view_all'>
                <p onClick={handleClickOpen("Flight Components")}  className='view_all_text'> View All <BsArrowRight  size={20}/></p>
              </div>
            </Box>


            <Box flex={1}  className='boxes'>
              <h3>
                <img style={{ marginRight:"10px" }} src={vector} alt="humanImage"  />
                Consumable Components
              </h3>
              <ul className='order_list_description'>
                {listItems}
              </ul>
              <div className='box_view_all'>
                <p onClick={handleClickOpen('Consumable Components')} className='view_all_text'> View All <BsArrowRight  size={20}/></p>
              </div>
            </Box>


          </Box>

        </div>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ maxWidth: '100vw' }}          >
            <div style={{
              padding:"10px",
            }}>
              <div style={{
                display:"flex",
                justifyContent:"center",
                backgroundColor:"#A5D0A9",
                marginBottom:"10px",
                borderRadius:"0.5rem"
              }}>
                <h2 >{component}</h2>
              </div>
              <div style={{ display:"flex", }}>
                <div className='component_boxes'>
                  <div>
                    <h2 style={{ display:"flex", justifyContent:"center", marginBottom:"10px"}}>Do's</h2>
                  </div>
                  <div>
                    <ul className='order_list_description'  >
                      {componentListItems}
                    </ul>
                  </div>
                </div>
                <div className='component_boxes'>
                  <div>
                    <h2 style={{ display:"flex", justifyContent:"center", marginBottom:"10px" }}>Don'ts</h2>
                  </div>
                  <div>
                    <ul className='order_list_description'  >
                      {donttListItems}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
      </Box>
    )
}

export default LandingPage;
