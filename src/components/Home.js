import { useState } from "react";
import LoginModal from "./LoginModal";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <h1 className="text-3xl mb-96">Computer Based Test</h1>
        <div>
          {isOpen && <LoginModal setIsOpen={setIsOpen} />}
          <button className="text-l border rounded p-1 w-40" onClick={() => setIsOpen(true)}>
            Login
          </button>
        </div>
      </div>
    )
}

export default Home;