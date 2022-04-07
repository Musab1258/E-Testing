import { useState } from "react";

function LoginModal({ setIsOpen }) {  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form className="w-2/4 mx-auto mt-auto border border-black flex flex-col">
        <label className="mb-3.5 m-auto flex flex-col">UserName
          <input
            type="text"
            placeholder="input username" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-4/5 mt-1.5 border rounded border-black"
          />
        </label>
        <label className="flex flex-col">Password
          <input
            type="password"
            placeholder="input password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-4/5 mt-1.5 border rounded border-black"
          />
        </label>
        <label className="mb-3.5 m-auto flex flex-col">
          Choose category
        <select className="w-4/5 mt-1.5 border rounded border-black">
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
        <button onClick={() => setIsOpen(false)}>
          Cancel
        </button>
        <button>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginModal;