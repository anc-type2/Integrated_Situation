import React, { use } from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

   
   const [username,setUsername] = useState("");
   const [password,setPassword] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
  

   try {
    const res= await axios.post("http://localhost:4040/api/account/login", {
        username,
        password
    })
    if (res.status === 200) {
      alert("Login successful! 🟩");
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/dashboard", { replace: true });
    }
   } catch (error) {
    alert("Invalid Credential Try Again! 🟥");
    console.log(error);
   }
    }


  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form onSubmit={handleSubmit}  className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
       
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6 tracking-wide"> LOGIN </h1>

        <fieldset className="border border-gray-300 rounded-lg p-4 mb-4">
          <legend className="px-2 text-sm text-gray-600">  User Credentials </legend>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">  Username </label>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} value={username} placeholder="Enter Your Username" className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"> Password </label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Enter Your Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

        </fieldset>
        <div className="flex justify-between gap-3 mt-4">

  <button  type="submit"  className="w-1/2 bg-green-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition duration-200">  Login </button>
 <Link to="/create-account">
  <button type="button" className="w-full bg-gray-300 text-gray-900 py-2 rounded-lg hover:bg-gray-400 transition duration-200"> Create Account </button>
</Link>
</div>
      </form>
    </div>
  )
}

export default Login;
       