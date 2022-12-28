import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react';
import { useState } from 'react';

function Auth() {
  const [inputs, setInputs] = useState({name:"",email:"",password:""})
  const [isSignup, setIsSignup] = useState(false)
  const handleChange=(e)=>{
    setInputs ((prevState)=>({
      ...prevState,
      [e.target.name]:[e.target.value]
    }))

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs )
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display='flex' 
        width='30%' flexDirection={'column'} alignItems='center' justifyContent={'center'}
        boxShadow='10px 10px 20px #ccc'
        padding={3}
        margin='auto'
        marginTop={15}
        boxRadius={5}>
          <Typography variant='h2' color='blue'>{isSignup ? "Signup" : "Login"}</Typography>
          {isSignup && <TextField onChange={handleChange} name='name' value={inputs.name}
          placeholder='Name' type={'text'} margin='normal'></TextField>}
          <TextField  onChange={handleChange} value={inputs.email} name='email'
          
          placeholder='Email' type={'email'} margin='normal'></TextField>
          <TextField  onChange={handleChange} value={inputs.password} name='password'
          placeholder='Password' type={'password'} margin='normal'></TextField>
          <Button type='submit' variant='contained' sx={{borderRadius:3, marginTop:3}}color='primary'>Submit</Button>
          <Button onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius:3, marginTop:3}}>Change To {isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth
