import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import axios from 'axios';

const View = () => {
    // const rows=[{name:'Devananda',email:'devananda@gmail.com',phone:9111111111},{name:'Aiswarya',email:'aish@gmail.com',phone:9222222222},{name:'Neha',email:'neha@gmail.com',phone:9444444444}]
    const [rows,setRows]=useState([])
    useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      //console.log(res.data.users)
      setRows(res.data.users)
    })
    },[])
    return (
    <div>
            <TableContainer style={{marginTop:'3%'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (//row means one object
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default View