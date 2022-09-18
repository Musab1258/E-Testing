import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../firebase";
import rectangle from "../images/Rectangle.svg";
import perxels from "../images/perxels.svg";

//import "./Register.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/Instruction");
  }, [user, loading]);

  return (
    <div className="border-2 w-[80rem] min-h-screen shadow-2xl max-h-full flex">
    <img src={rectangle} alt="Top rectangle" className="h-80"/>
    <div className="border-2 w-full text-center flex flex-col justify-center items-center -ml-24" >
        <img src={perxels} alt="Perxels logo" className="w-28 mb-5 -mt-20" />
        <h1 className="text-3xl mb-5 w-2/6 text-blue">Sign up</h1>
        <p className="text-2xl mb-10">Hey there! kindly enter your log in details to access the questions</p>
        <div className="flex flex-col justify-center items-center">
            <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your fullName" 
                className="text-base border rounded-md py-3 pl-4 pr-96 mb-4 text-left" 
            />
            <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="text-base border py-3 rounded-md pl-4 pr-96 mb-4 text-left"     
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your unique password" 
                className="text-base border rounded-md py-3 pl-4 pr-96 mb-6 text-left" 
            />
            <button
                onClick={register} 
                className="text-base border mb-4 bg-blue text-white rounded-md w-[37.5rem] py-3"
            >
                Sign Up
            </button>
            <div>
            <p>Already have an account? <Link to="/Signin" className="underline text-blue">Sign in</Link> now</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Signup;