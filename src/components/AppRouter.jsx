import React from "react";
import PostPage from "../pages/PostPage";
import {BrowserRouter, Route, Routes, Navigate}from 'react-router-dom'
import About from "../pages/About";
import Navbar from "../components/UI/navbar/Navbar";
import ErrorPage from "../pages/ErrorPage";
import User from "../pages/User";

const AppRouter = () => {
 
  return (
    <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<PostPage/>}/>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path="/" element={<Navigate replace to='/error'/>}/>
            <Route path="/post/:id" element={<User/>}/>
          </Routes>
          
     </BrowserRouter>
  );
};
export default AppRouter;
