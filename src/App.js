
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Login/login";
import Home from "./Page/home";

function App() {
  return (
 
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}



export default App;
