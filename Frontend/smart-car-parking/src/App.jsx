import React from "react";  
import CreateAccount from "./Pages/createAccount.jsx";
import ProtectedRoute from "./Components/protectedRoute.jsx";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
            </ProtectedRoute>
        }/>
      </Routes>
   
  );
}

export default App;
     