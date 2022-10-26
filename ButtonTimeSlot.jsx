import React, { useEffect } from "react";
import { getFoodType } from "../utils/Auth";
import { addTimeslot } from "../utils/Auth";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from "react-router-dom";
import stylesaddbtn from "../styles/AddbuttonStyle";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';


const useStyles = makeStyles(stylesaddbtn)
function ButtonTimeSlot() {
  const classes = useStyles()
  const [data, setData] = useState("");
  const navigate = useNavigate()
  const [age, setAge] = React.useState('');
  const [foodType, setFoodType] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState("");
  const [food_type_id, setFood_type_id] = useState("");


  function dropAdd() {
    let value = { from, to, food_type_id}
    addTimeslot(value).then((res) => {
      console.log(res)

      navigate('/timeslot')
    }).catch((err) => {
      console.log('err', err.response.data.message)
    })

  }




  const [rows, setRows] = useState([]);
  useEffect(() => {
    getFoodType().then((res) => {
      console.log('food type', res)
      setFoodType(res.data.data)

    }).catch((err) => {
      console.log('food type err', err)
    })
  }, []);

  return (
    <>

      <NavBar />
      {/* <Box> {name}</Box> */}
      <Grid container spacing={2} className={classes.add1strt}>
        <Grid item xs={12}>

          <Box className={classes.add1strtadd}>Add Items</Box>

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
                        '& .MuiTextField-root': { m: 1, width: '45ch' },
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
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
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
                        '& .MuiTextField-root': { m: 1, width: '45ch' },
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
                          value={to}
                          onChange={(e) => setTo(e.target.value)}
                        />

                      </div>
                    </Box>
                  </Box>
                </Box>


                <Box className={classes.add1}>
                  <Box className={classes.add2}>Type : </Box>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth sx={{ width: '395px', border: '1px solid white', }}>
                      <InputLabel id="demo-simple-select-label">select type</InputLabel>
                      <Select
                       className={classes.add2color}
                        label=""
                        value={food_type_id}
                        onChange={(e) => setFood_type_id(e.target.value)}
                      >
                        {
                          foodType.map((ele) => {
                            return (
                              <MenuItem value={ele.id}>{ele.type}</MenuItem>
                            )
                          })
                        }
                        {/* <MenuItem>{id}</MenuItem> */}



                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Box className={classes.add1btn}>
                  <Button variant="contained" onClick={dropAdd} >Add</Button>
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
export default ButtonTimeSlot;