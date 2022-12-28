import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Auth from "./components/Auth"
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn=useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  return <React.Fragment>
    <header><Header/></header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/blogs/add" element={<AddBlog/>}></Route>
        <Route path="/myBlogs" element={<UserBlogs/>}></Route>
        <Route path="/myBlogs/:id" element={<BlogDetail/>}></Route>
        
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
