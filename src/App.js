import { Link } from "react-router-dom";
import rectangle from "./images/Rectangle.svg";
import youngman from "./images/young-man-working.svg";
import perxels from "./images/perxels.svg";

function App() {
  return (
    <div className="border-2 w-[80rem] min-h-screen shadow-2xl flex">
      <img src={rectangle} alt="Top rectangle" className="h-80"/>
      <div className="w-full flex flex-col justify-center items-center text-center -ml-24 -mt-10" >
        <img src={perxels} alt="Perxels logo" className="w-28 mb-5"/>
        <img src={youngman} alt="young man working" className="h-[40%] border-2 border-yellow mb-6 py-2"/>
        <h1 className="text-3xl mb-4 w-2/6 text-blue">Welcome to Perxel's e-assesment platform</h1>
        <p className="text-lg text-center mb-4 w-2/5">We wish you a blissful experience and great luck in your assesment</p>
        <Link to="/Signin" className="text-xl border py-2 w-64 bg-blue text-white rounded-md"><button>Get Started</button></Link>
      </div>
    </div>
  );
}

export default App;
