import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


function Blog({title,description,imageURL,userName}) {
  return (
    <div>
      <Card sx={{ width: '40%', margin:'auto',mt:2,boxShadow:"5px 5px 10px #ccc",padding:2,":hover":{
        boxShadow:"10px 10px 20px #ccc"

      } }}> 
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} >
            {userName}
          </Avatar>
        }
       
        title={title}
        subheader="jio"
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL }
        alt="Paella dish"
      />
      <CardContent>
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
