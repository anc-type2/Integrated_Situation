import React from "react";
import UserLogin from "./userLogin";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";  
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
  );
}

export default App;
     