import axios from 'axios';
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
  const id=useParams().id;
  console.log("blogdetails page er id",id);
  const fetchDetails = async ()=>{
    const res=await axios.get(`http://localhost:5000/api/blog/${id}`).catch(err=>console.log(err));
    const data=await res.data;
    return data;
  }
  useEffect(()=>{
    
  })
  return (
    <div>
      blog
    </div>
  )
}

export default BlogDetail
