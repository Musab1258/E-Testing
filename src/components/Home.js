import { useState } from "react";
import LoginModal from "./LoginModal";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-10">
        <h1 className="text-3xl mb-96">Computer Based Test</h1>
        <h2 className="text-3xl mb-10">Aptitude Test</h2>
        <section>
          {isOpen && <LoginModal setIsOpen={setIsOpen} />}
        </section>
        <button className="text-l border rounded py-2 px-10 bg-white text-black" onClick={() => setIsOpen(true)}>
          Login
        </button>
      </div>
    )
}

export default Home;