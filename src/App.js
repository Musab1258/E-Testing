import { Link } from "react-router-dom";
import rectangle from "./images/Rectangle.svg";
import youngman from "./images/young-man-working.svg";
import perxels from "./images/perxels.svg";

function App() {
  return (
    <div className="border-2 max-w-screen-xl shadow-2xl  max-h-full flex">
      <img src={rectangle} alt="Top rectangle" className="h-80 p-0 m-0 border-2"/>
      <div className="flex flex-col border-2 m-auto justify-center items-center" >
        <img src={perxels} alt="Perxels logo" className="w-28 mt-10 mb-5"/>
        <img src={youngman} alt="young man working" className="w-4/6 border border-yellow-200 py-5 px-3 mb-10"/>
        <h1 className="text-3xl mb-5 w-2/6">Welcome to Perxel's e-assesment platform</h1>
        <p className="text-base text-center mb-5 w-3/6">We wish you a blissful experience and great luck in your assesment</p>
        <Link to="/Signin" className="text-xl border py-2 px-20"><button>Get Started</button></Link>
      </div>
    </div>
  );
}

export default App;
