import React from 'react';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import {Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { IconButton } from '@mui/material';
 import {useNavigate} from 'react-router-dom'


function Blog({title,date,description,imageURL,userName,isUser,id}) {
  console.log("ID: ",id)
  const navigate=useNavigate();
  const handleEdit=(e)=>{
    navigate(`/myBlogs/${id}` )
    console.log(id)
  }
  const deleteRequest = async () =>{
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err=>console.log(err));
    const data=await res.data;
    console.log("delete successfull", data);
    return data;
  };
  const handleDelete=()=>{
    deleteRequest().then((data)=>console.log(data)).then(()=>navigate("/")).then(()=>navigate("/blogs"));
  }
  console.log(title,isUser)
  var utc=date;
  var local=new Date(utc);
  console.log(typeof(local.toString()))
  return (
    <div>
      <Card sx={{ width: '40%', margin:'auto',mt:2,boxShadow:"5px 5px 10px #ccc",padding:2,":hover":{
        boxShadow:"10px 10px 20px #ccc"

      } }}> 
      {isUser && (
        <Box display='flex'>
          <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><EditIcon color='warning'/></IconButton>
          <IconButton onClick={handleDelete} ><DeleteIcon color='error'/></IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar  sx={{ bgcolor:'red'}}aria-label='recipe' >
            {userName ? userName.charAt(0) : ""}
          </Avatar>
        }
       
        title={title}
        subheader={local.toString()}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL }
        alt="Paella dish"
      />
      
      <CardContent>
      <hr/>
      <br/>
        <Typography variant="body2" color="text.secondary">
          <b>{userName}</b> {":  "}
         {description}
        </Typography>
      </CardContent>
      
      
    </Card>
    </div>
  )
}

export default Blog
