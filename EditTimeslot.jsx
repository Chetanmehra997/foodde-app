import React, { useEffect } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
// import stylesaddbtn from "../styles/AddbuttonStyle";
import NavBar from "../components/NavBar";
import { useState } from "react";
import stylesedit from "../styles/EditStyle";
import { useParams } from "react-router-dom";
import { updateTimeslot } from "../utils/Auth";

const useStyles = makeStyles(stylesedit)
function EditTimeslot() {
  const classes = useStyles()
  const params = useParams()

  const { id, from,to,food_type_id } = params;

  const [foodfrom, setFoodfrom] = useState(from);
  const [foodto, setFoodTo] = useState(to);
  const [foodType, setFoodType] = useState(food_type_id);

  const handleSubmit = () => {
    updateTimeslot(id, { from: foodfrom ,to: foodto,food_type_id: foodType}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>

      <NavBar />
      {/* <Box> {name}</Box> */}
      <Grid container spacing={2} className={classes.add1strt}>
        <Grid item xs={12}>



          <Grid container spacing={3}>
            <Grid item xs>

            </Grid>
            <Grid item xs={4}>
              <Box className={classes.add0}>


                <Box className={classes.add1}>
                  <Box className={classes.add2}>From :</Box>
                  <Box>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '45ch',color:'white' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          className={classes.add2color}
                          label=""
                          id="outlined-size-small"
                          defaultValue=""
                          size="small"
                          value={foodfrom}
                          onChange={(e) => setFoodfrom(e.target.value)}
                          style={{ color:'white' }}
                        />

                      </div>
                    </Box>
                  </Box>
                </Box>


                <Box className={classes.add1}>
                  <Box className={classes.add2}>To :</Box>
                  <Box>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '45ch',color:'white' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          className={classes.add2color}
                          label=""
                          id="outlined-size-small"
                          defaultValue=""
                          size="small"
                          value={foodto}
                          onChange={(e) => setFoodTo(e.target.value)}
                          style={{ color:'white' }}
                        />

                      </div>
                    </Box>
                  </Box>
                </Box>


                <Box className={classes.add1}>
                  <Box className={classes.add2}>Type :</Box>
                  <Box>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '45ch',color:'white' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          className={classes.add2color}
                          label=""
                          id="outlined-size-small"
                          defaultValue=""
                          size="small"
                          value={foodType}
                          onChange={(e) => setFoodType(e.target.value)}
                          style={{ color:'white' }}
                        />

                      </div>
                    </Box>
                  </Box>
                </Box>


                <Box className={classes.add1btn}>
                  <Button variant="contained" onClick={handleSubmit} >Update</Button>
                </Box>
              </Box>

            </Grid>
            <Grid item xs>

            </Grid>
          </Grid>


          <Box className={classes.itemstrt01}>
            <Link to='/timeslot' className={classes.itemstrt010}><Button variant="contained" className={classes.itemstrt011} > Back To Home</Button></Link>
          </Box>



        </Grid>
      </Grid>


    </>
  )
}
export default EditTimeslot;