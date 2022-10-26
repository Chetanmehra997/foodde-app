import React from "react";
import TimeSlotTable from "../timeslot/TimeSlotTable"
import { Link } from "react-router-dom";
import Navbar from "./NavBar"
import Tablefood from '../pages/TableMenuitem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import stylesmenuitems from "../styles/MenuitemsStyle";
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


const useStyles = makeStyles(stylesmenuitems)

function Timeslot(){
    const classes = useStyles()

   
    return(
        <>
      
<Grid container spacing={2} className={classes.itemstrt}>
  <Grid item xs={12}>
    <Box className={classes.itemstrt00}>
   <Link to='/timeslot/add'><Button variant="contained" className={classes.itemstrt0}> Add Items</Button></Link>

    </Box>
   <Grid container spacing={2}>
  {/* <Grid item xs={2} className={classes.itemstrt1}>

<Button variant="contained">Click</Button>

  </Grid> */}
  
  <Grid item xs={12} className={classes.itemstrt1}>
  
{/* Table shown start */}


<TimeSlotTable/>

  </Grid>
</Grid>


{/* <img src=""></img> */}


</Grid>
 </Grid>

        
        
        </>
    )
}
export default Timeslot;