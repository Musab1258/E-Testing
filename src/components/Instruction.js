import { Link } from "react-router-dom";
import rectangle from "../images/Rectangle.svg";

function Instruction() {
  return (
    <div className="border-2 max-w-screen-xl min-h-screen shadow-2xl flex">
        <img src={rectangle} alt="Top rectangle" className="h-80" />
        <div className="border-2 w-full flex flex-col justify-center items-center text-center -ml-24 -mt-60" >
          <h1 className="text-3xl mb-2 w-2/6 text-blue">Instructions</h1>
          <p className="text-2xl mb-4">Please read the following instructions carefully.</p>
          <ul className="" style={{marginLeft: "-62rem"}}>
              <li className="mb-2 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-2 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-2 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-2 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-2 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-2 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-2 list-[circle]">Don't be afraid, wagmi.</li>
          </ul>
          <Link to="/Question"><button className="text-base border blue bg-blue text-white" style={{padding: "0.5rem 17rem"}} >Start Now</button></Link>
        </div>
    </div>  
  );
}

export default Instruction;