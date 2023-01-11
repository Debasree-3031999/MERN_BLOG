import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const lableStyle = { mb: 1, mt: 2, fontSize: '24px', fontWeight: "bold" } 
function BlogDetail() {
  const navigate=useNavigate()
  const [blog,setBlog]=useState()
  const id=useParams().id;
  console.log("blogdetails page er id",id);

 
    const [inputs, setInputs] = useState({ title: "", description: "", image: "" })
    const handleChange=(e)=>{
      setInputs ((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
      }))
  
    }
  const fetchDetails = async ()=>{
    const res=await axios.get(`https://mern-blog-api-5sbk.onrender.com/api/blog/${id}`).catch(err=>console.log(err));
    const data=await res.data;
    return data;
  }
 useEffect(()=>{
  fetchDetails().then((data)=>{
    setBlog(data.blog)
    setInputs({title:data.blog.title,description:data.blog.description});
  });
 },[id]);

 const sendRequest=async()=>{
  const res = await axios.put(`https://mern-blog-api-5sbk.onrender.com/api/blog/update/${id}`,{
    title:inputs.title,
    description:inputs.description}).catch(err=>console.log(err));
    const data=await res.data;
    console.log("blogdetails page ka sendrequest wala data", data)
    return data;
 }

  console.log("blogdetails page ka id",blog)

  const handleSubmit=(e)=>{
    e.preventDefault();
      console.log("blogdetails page ka", inputs);
      sendRequest().then((data)=>console.log("after submit data confirm update", data)).then(()=>navigate("/myBlogs/"));
};
  return (
    <div>
      {inputs &&
       <form onSubmit={handleSubmit}>
        <Box border={3} borderColor='linear-gradient(77deg, rgba(2,0,36,1) 0%, rgba(3,18,47,0.6102855693058473) 66%, rgba(26,87,204,0.6102855693058473) 91%)' borderRadius={10} boxShadow='10px 10px 20px #ccc' padding={3} display='flex' flexDirection={'column '} width={"80%"} margin={'auto'} marginTop={3}>
          <Typography fontWeight={'bold'} padding={3} color='black' varient='h2' textAlign={'center'} fontSize='34px'>Post Your Blog</Typography>
          <InputLabel sx={lableStyle}>Title</InputLabel>
          <TextField name='title' onChange={handleChange} value={inputs.title} margin='normal' variant='outlined' />
          <InputLabel sx={lableStyle}  >Description</InputLabel>
          <TextField  name='description' onChange={handleChange} value={inputs.description} margin='normal' variant='outlined' />
         
          <Button sx={{mt:2, borderRadius:4}} varinat='contained' color='warning' type='submit'>Submit</Button>

        </Box>
      </form>}
    </div>
  )
}

export default BlogDetail
