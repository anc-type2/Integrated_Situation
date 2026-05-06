import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreateAccount() {

  const [username, setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log("button is clicked");
 
  try {
      const res = await axios.post("http://localhost:4040/api/account",{
         username,
         email,
         password
  })
  if (res.status === 201) {
  alert("Your Account Created Successfully! 🟩");

  navigate("/login");
  }

  } catch (error) {
    console.log(error);
  }
 }
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form onSubmit={handleSubmit}  className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
       
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6 tracking-wide"> Create Your Account </h1>

        <fieldset className="border border-gray-300 rounded-lg p-4 mb-4">
          <legend className="px-2 text-sm text-gray-600">  User Credentials </legend>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">  Username </label>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} value={username} placeholder="Enter Your Username" className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1"> Email </label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)}  value={email} placeholder="Enter Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"> Password </label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Enter Your Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

        </fieldset>

        <div className="flex gap-3">
          
          <button type="submit"  className="w-full bg-gray-300 text-gray-800 py-7 rounded-lg hover:bg-gray-400 transition duration-200">
            Create Account
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;