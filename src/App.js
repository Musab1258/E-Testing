import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <img src="./images/Rectangle.svg" alt="Top rectangle" />
      <img src="./images/perxels.svg" alt="Perxels logo" />
      <img src="./images/young-man-working.svg" alt="young man working" />
      <h1>Welcome to Perxel's e-assesment platform</h1>
      <p>We wish you a blissful experience and great luck in your assesment</p>
      <Link to="/Signin"><button>Get Started</button></Link>
    </div>
  );
}

export default App;
