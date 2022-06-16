import { useState } from "react";
import { Link } from "react-router-dom";

function LoginModal({ setIsOpen }) {  
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <div className="fixed top-0 left-0 h-screen w-screen shadow-lg">
      <div className="flex h-screen w-screen border-2 shadow-lg justify-items-center items-center">
        <form className="w-3/4 h-4/5 m-auto border-2 bg-white text-black rounded-lg shadow-2xl p-2">
          <h1 className="h-10 m-auto text-lg rounded-lg bg-black text-white text-center">Login</h1>
          <p className="text-center my-4 text-lg">Please fill in your details to login</p>
          <label className="mb-5 mx-5 flex flex-col">UserName
            <input
              type="text"
              placeholder="input fullname" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-11/12 h-10 mt-1.5 border rounded border-black"
            />
          </label>
          <label className="mb-5 mx-5 flex flex-col">Password
            <input
              type="password"
              placeholder="input password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-11/12 h-10 mt-1.5 border rounded border-black"
            />
          </label>
          <label className="mb-5 mx-5 flex flex-col">
            Choose category
          <select className="w-11/12 h-10 mt-1.5 border rounded border-black">
            <option value="none">
              select a category
            </option>
            <option value="student">
              Student
            </option>
            <option value="Administrator">
              Administrator
            </option>
          </select>
          </label>
          <button className="ml-80 w-1/6 h-auto p-2 mr-2 border border-black" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <Link to="/UserHome" state={{ name: name }} >
            <button className="w-1/6 h-auto p-2 border border-black">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginModal;
