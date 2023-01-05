import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const lableStyle = { mb: 1, mt: 2, fontSize: '24px', fontWeight: "bold" }
function AddBlog() {
  const [inputs, setInputs] = useState({ title: "", description: "", image: "" })
  const handleChange=(e)=>{
    setInputs ((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))

  }
  const sendRequest = async () =>{
    const res=await axios.post('http://localhost:5000/api/blog/add',{ title:inputs.title,description:inputs.description,image:inputs.image  , user:JSON.parse(localStorage.getItem("userId"))}).catch(err=>console.log("error :",err));
    const data = await res.data;
    console.log("post data: ",data)
    return data
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("input data", inputs,localStorage.getItem("userId"))
    sendRequest()
    // .then(data=>console.log("data->",data))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box border={3} borderColor='linear-gradient(77deg, rgba(2,0,36,1) 0%, rgba(3,18,47,0.6102855693058473) 66%, rgba(26,87,204,0.6102855693058473) 91%)' borderRadius={10} boxShadow='10px 10px 20px #ccc' padding={3} display='flex' flexDirection={'column '} width={"80%"} margin={'auto'} marginTop={3}>
          <Typography fontWeight={'bold'} padding={3} color='black' varient='h2' textAlign={'center'} fontSize='34px'>Post Your Blog</Typography>
          <InputLabel sx={lableStyle}>Title</InputLabel>
          <TextField name='title' onChange={handleChange} value={inputs.title} margin='normal' variant='outlined' />
          <InputLabel sx={lableStyle}  >Description</InputLabel>
          <TextField  name='description' onChange={handleChange} value={inputs.description} margin='normal' variant='outlined' />
          <InputLabel sx={lableStyle} >ImageURL</InputLabel>
          <TextField  name='image' onChange={handleChange} value={inputs.imageURL} margin='normal' variant='outlined' />
          <Button sx={{mt:2, borderRadius:4}} varinat='contained' color='warning' type='submit'>Submit</Button>

        </Box>
      </form>

    </div>
  )
}

export default AddBlog
