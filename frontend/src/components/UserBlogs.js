import React, { useEffect,useState } from 'react';
import  axios  from 'axios';
import Blog from './Blog';

function UserBlogs() {
  const [user, setUser] = useState()
  const id=JSON.parse(localStorage.getItem("userId"));
  const sendRequest=async()=>{
    const res=await axios.get(`http://localhost:5000/api/blog/user/${id}`).catch(err=>console.log(err))
    const data=await res.data;
    console.log("myBlog data: ",data)
    return data;
  };
  useEffect(()=>{
    sendRequest().then((data)=>setUser(data.blogs))
  },[]);
  console.log("userblog page ka blogs",user)
  return (
    <div>
     {user && user.blogs && user.blogs.map((blog,index)=>(
        <Blog key={index}
        title={blog.title}description={blog.description} imageURL={blog.image} userName={user.name}/>
      ))}
    </div>  
  )
}

export default UserBlogs
