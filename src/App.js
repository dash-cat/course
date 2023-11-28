import React from "react";
import PostPage from "./pages/PostPage";
import "../src/styles/App.css";
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import About from "./pages/About";
import Navbar from "./components/UI/navbar/Navbar";

const App = () => {
 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<PostPage/>}/>
      </Routes>
     </BrowserRouter>
  );
};
export default App;
