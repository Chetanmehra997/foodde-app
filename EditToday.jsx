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
import { updateTodayMenu} from "../utils/Auth";

const useStyles = makeStyles(stylesedit)
function EditToday() {
  const classes = useStyles()
  const params = useParams()

  const { id,menu_item_id, quantity,mendotary,defaultvar} = params;

  const [todaymenu_item_id, setTodaymenu_item_id] = useState(menu_item_id);
  const [todayquantity, setTodayquantity] = useState(quantity);
  const [todaymendotary, setTodaymendotary] = useState(mendotary);
  const [todaydefaultvar, setTodaydefaultvar] = useState(defaultvar);


  const handleSubmit = () => {
    updateTodayMenu(id, { menu_item_id: todaymenu_item_id ,quantity: todayquantity}).then(res => {
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
                  <Box className={classes.add2}>Menu Item Id :</Box>
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
                          value={todaymenu_item_id}
                          onChange={(e) => setTodaymenu_item_id(e.target.value)}
                        
                        />

                      </div>
                    </Box>
                  </Box>
                </Box>


                <Box className={classes.add1}>
                  <Box className={classes.add2}>Quantity :</Box>
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
                          value={todayquantity}
                          onChange={(e) => setTodayquantity(e.target.value)}
                          style={{ color:'white' }}
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
                          value={todaymendotary}
                          onChange={(e) => setTodaymendotary(e.target.value)}
                          style={{ color:'white' }}
                        />

                      </div>
                    </Box>
                  </Box>
                </Box>

                <Box className={classes.add1}>
                  <Box className={classes.add2}>Default :</Box>
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
                          value={todaydefaultvar}
                          onChange={(e) => setTodaydefaultvar(e.target.value)}
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
            <Link to='/todaymenu' className={classes.itemstrt010}><Button variant="contained" className={classes.itemstrt011} > Back To Home</Button></Link>
          </Box>



        </Grid>
      </Grid>


    </>
  )
}
export default EditToday;