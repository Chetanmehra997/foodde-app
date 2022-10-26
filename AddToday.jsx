import React, { useEffect } from "react";
import { getFoodType } from "../utils/Auth";
import { getMenuitem } from "../utils/Auth";
import { addTodayMenu } from "../utils/Auth";
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
function AddToday() {
  const classes = useStyles()
  const [data, setData] = useState("");
  const navigate = useNavigate()
  const [age, setAge] = React.useState('');
  const [foodType, setFoodType] = useState([]);
  const [menuitem, setMenuItem] = useState([]);
  const [menu_item_id, setMenu_item_id] = useState('');
  const [quantity, setQuantity] = useState("");
  const [mendotary, setMendotary] = useState(false);
  const [defaultvar, setDefaultvar] = useState(false);
  const [food_type_id, setFood_type_id] = useState("");
  // const [date, setDate] = useState("");
  // const [updatedAt, setUpdatedAt] = useState("");
  // const [createdAt, setCreatedAt] = useState("");

  function dropAdd() {
    let value = { menu_item_id, quantity, mendotary, defaultvar, food_type_id, }
    addTodayMenu(value).then((res) => {
      console.log(res)

      navigate('/todaymenu')
    }).catch((err) => {
      console.log('err', err.response.data.message)
    })

  }




  const [rows, setRows] = useState([]);
  useEffect(() => {
    getMenuitem().then((res) => {
      console.log('menu item', res)
      setMenuItem(res.data.data)

    }).catch((err) => {
      console.log('menu item err', err)
    })
  }, []);

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
                  <Box className={classes.add2}>Menu item id : </Box>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth sx={{ width: '395px', border: '1px solid white', }}>
                      <InputLabel id="demo-simple-select-label">select type</InputLabel>
                      <Select
                        className={classes.add2color}
                        label=""
                        value={menu_item_id}
                        onChange={(e) => setMenu_item_id(e.target.value)}
                      >
                        {
                          menuitem.map((ele) => {
                            return (
                              <MenuItem value={ele.id}>{ele.item_name}</MenuItem>
                            )
                          })
                        }
                        {/* <MenuItem>{id}</MenuItem> */}



                      </Select>
                    </FormControl>
                  </Box>
                </Box>


                <Box className={classes.add1}>
                  <Box className={classes.add2}>quantity :</Box>
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
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />

                      </div>
                    </Box>
                  </Box>
                </Box>


                <Box className={classes.add1}>
                  <Box className={classes.add2}>mendotary :</Box>
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
                          value={mendotary}
                          onChange={(e) => setMendotary(e.target.value)}
                        />

                      </div>
                    </Box>
                  </Box>
                </Box>

                <Box className={classes.add1}>
                  <Box className={classes.add2}>default :</Box>
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
                          style={{ border: '1px solid white' }}
                          label=""
                          id="outlined-size-small"
                          defaultValue=""
                          size="small"
                          value={defaultvar}
                          onChange={(e) => setDefaultvar(e.target.value)}
                        />

                      </div>
                    </Box>
                  </Box>
                </Box>

                <Box className={classes.add1}>
                  <Box className={classes.add2}>Food Type Id : </Box>
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
            <Link to='/todaymenu' className={classes.itemstrt010}><Button variant="contained" className={classes.itemstrt011} > Back To Home</Button></Link>
          </Box>



        </Grid>
      </Grid>


    </>
  )
}
export default AddToday;