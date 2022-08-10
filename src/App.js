import { Link } from "react-router-dom";
import Instruction from "./components/Instruction";


function App() {
  return (
    <div>
      <img alt="" />
      <img alt="" />
      <h1>Welcome to Perxel's e-assesment platform</h1>
      <p>We wish you a blissful experience and great luck in your assesment</p>
      <Link to="Instruction"><button>Get Started</button></Link>
    </div>
  );
}

export default App;
