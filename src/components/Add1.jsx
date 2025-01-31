import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add1 = ({person}) => {
    const [page,setPage]=useState('Home')
    const[count,setCount]=useState(0);
    const [form,setForm]=useState({
      movie:person.movie,
      email:person.email,
      password:person.password,
      address:person.address
    })
    function valueAdd() {
      console.log(form)
        // setCount(count+1)
    }
    function valueCap(e){
      // console.log(e)
     setForm({...form,[e.target.name]:e.target.value})
    }
  return (
  
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h1>Welcome to {page} Page</h1> 
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name='name'
          value={form.movie}
          onChange={valueCap}
        />
        <TextField
       
          id="outlined-disabled"
          label="Email"
         type='email'
         name='email'
         value={form.email}
         onChange={valueCap}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name='password'
          value={form.password}
          onChange={valueCap}
        />
        <TextField
          id="outlined-read-only-input"
          label="Address"
          name='address'
          value={form.address}
          onChange={valueCap}
        />
        </div>
        <div>
            <Button variant='contained' onClick={valueAdd}>Register</Button>
            <br></br>
            {/* <small>Button is clicked {count} times </small> */}
        </div>
        </Box>
    
  )
}

export default Add1