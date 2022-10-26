import React, { useState, useEffect } from "react";
import { deleteTodayMenu } from "../utils/Auth";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { getTodayMenu } from "../utils/Auth";
import CreateIcon from '@mui/icons-material/Create';
import TablePagination from '@mui/material/TablePagination';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";


const useStyles = makeStyles({
  table: {
    minWidth: 550
  }
});

const Demo = () => {



  const classes = useStyles();
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);

    }
  };


  const [searched, setSearched] = useState("");

  const [deleted, setDeleted] = useState(false);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    getTodayMenu ().then((res) => {
      console.log('today menu', res)
    setData(res.data.data)
      var result = res.data
      var c = []
      result.map((item) => {
        var b = { date: item.date, quantity: item.quantity, item_name:item.menu_item.item_name,type: item.food_type.type,mendotary:item.mendotary,default:item.default }
        c.push(b)
      })
      setRows(c)



    }).catch((err) => {
      console.log('today menu', err)
    })
  }, [deleted]);
  console.log(99, rows)

  const requestSearch = (searchedVal) => {
    const filteredRows = data.filter((row) => {
      return row.type.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setData(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };


  // function editpage() {

  //   navigate('/menuitems/edit')
  // }



  return (
    <>

{/* <Viewdetailpackages send ={data}/> */}
      <Paper style={{ backgroundColor: 'transparent', border: '1px solid white' }}>

        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ display: 'flex', color: 'aliceblue', fontSize: '18px' }}>Date

                  <Box>

                    <Button onClick={handleClickOpen} style={{ marginTop: '-5px' }}><FilterListIcon /></Button>
                    <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                      <DialogTitle>Fill the form</DialogTitle>
                      <DialogContent>
                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>



                            <SearchBar
                              style={{ width: 180 }}
                              value={searched}
                              onChange={(searchVal) => requestSearch(searchVal)}
                              onCancelSearch={() => cancelSearch()}
                            />

                          </FormControl>

                        </Box>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Ok</Button>
                      </DialogActions>
                    </Dialog>
                  </Box>

                  


                </TableCell>
            
                <TableCell align="Left" style={{ color: 'aliceblue', fontSize: '18px' }} >Quantity</TableCell>
                <TableCell align="Left" style={{ color: 'aliceblue', fontSize: '18px' }} >Item Name</TableCell>
                <TableCell align="Left" style={{ color: 'aliceblue', fontSize: '18px' }} >Type</TableCell>
                <TableCell align="Left" style={{ color: 'aliceblue', fontSize: '18px' }} >Mandatory</TableCell>
                <TableCell align="Left" style={{ color: 'aliceblue', fontSize: '18px' }} >Default</TableCell>
                <TableCell align="center" style={{ color: 'aliceblue', fontSize: '18px' }} >Action</TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    
                    <TableCell align="left" style={{ color: 'aliceblue', fontSize: '16px' }}>
                      {row.date}
                      </TableCell>
                    <TableCell align="left" style={{ color: 'aliceblue', fontSize: '16px' }}>
                      {row.quantity}
                      </TableCell>
                     
                     <TableCell align="left" style={{ color: 'aliceblue', fontSize: '16px' }}>{row.menu_item?.item_name}</TableCell>
                     <TableCell align="left" style={{ color: 'aliceblue', fontSize: '16px' }}>{row.food_type?.type}</TableCell>
                     <TableCell align="left" style={{ color: 'aliceblue', fontSize: '16px' }}>{`${row.mendotary}`}</TableCell>
                     <TableCell align="left" style={{ color: 'aliceblue', fontSize: '16px' }}>{`${row.default}`}</TableCell>
                        


                    <TableCell align="center" >
                     
                      <CreateIcon onClick={() => {
                        navigate(`/todaymenu/edit/${row.id}/${row.menu_item_id}/${row.quantity}/${row.mendotary}/${row.defaultvar}`)
                      }} style={{ color: 'aliceblue', fontSize: '20px', cursor: 'pointer', marginRight: '24px', }} />
                      {/* </Link> */}
                      <DeleteIcon
                        onClick={() => {
                          Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be deleted a item!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                          }).then((result) => {
                            if (result.isConfirmed) {

                                deleteTodayMenu(row.id).then(res => {
                                setDeleted(!deleted)
                                Swal.fire(
                                  'Deleted!',
                                  'Your file has been deleted.',
                                  'success'
                                )
                              }).catch(err => {
                                Swal.fire(
                                  'error!',
                                  'Your file has been deleted.',
                                  'success'
                                )
                              })



                            }
                          })
                        }}


                        style={{ color: 'aliceblue', fontSize: '20px', cursor: 'pointer' }} />
                    </TableCell>
                    {/* <TableCell align="right" >  <Button style={{ color: 'aliceblue', fontSize: '20px' }}><DeleteIcon/> </Button></TableCell> */}

                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <TablePagination
        style={{ color: 'white', fontSize: '20px' }}
        rowsPerPageOptions={[15, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />




      {/* <Footertable/> */}
    </>
  );
};

export default Demo;
