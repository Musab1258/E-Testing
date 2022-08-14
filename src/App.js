import { Link } from "react-router-dom";
import rectangle from "./images/Rectangle.svg";
import youngman from "./images/young-man-working.svg";
import perxels from "./images/perxels.svg";

function App() {
  return (
    <div>
      <img src={rectangle} alt="Top rectangle" />
      <img src={perxels} alt="Perxels logo" />
      <img src={youngman} alt="young man working" />
      <h1>Welcome to Perxel's e-assesment platform</h1>
      <p>We wish you a blissful experience and great luck in your assesment</p>
      <Link to="/Signin"><button>Get Started</button></Link>
    </div>
  );
}

export default App;
