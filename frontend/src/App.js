import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import React, { useEffect } from "react";
import Auth from "./components/Auth"
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import Background from "./components/Background";

 
function App() {
  const dispath=useDispatch()
  const isLoggedIn=useSelector(state => state.isLoggedIn);
  console.log("isloggedin:",isLoggedIn)
  useEffect(()=>{
    if(localStorage.getItem("userId")){
       dispath(authActions.login())
    }
  },[dispath])
  return <React.Fragment>
    <header><Header/></header>
    
    <main>
      <Routes>
      <Route path="/" element={<Background/>}></Route>
        {! isLoggedIn ?
        <Route path="/auth" element={<Auth/>}></Route> :<>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/blogs/add" element={<AddBlog/>}></Route>
        <Route path="/myBlogs" element={<UserBlogs/>}></Route>
        <Route path="/myBlogs/:id" element={<BlogDetail/>}></Route></>}
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
