import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';

function Blogs() {
  
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios.get("https://mern-blog-api-5sbk.onrender.com/api/blog").catch(err => console.log(err));
    const data = await res.data;
    console.log("fetched blog data: ", data)
    return data;
  };
  useEffect(() => {
    sendRequest().then(data =>

      setBlogs(data.blogs))
  }, []);
  let abcd = JSON.parse(localStorage.getItem('userId'))
  console.log("blogs page ka blog", blogs, abcd);
  return (
    <div>
      {blogs && blogs.map((blog, index) => (
        <Blog key={index}
          id={blog._id}
          isUser={abcd === blog.user._id}
          title={blog.title} date={blog.date} description={blog.description} imageURL={blog.image} userName={blog.user.name} />
      ))}

    </div>
  )
}

export default Blogs
