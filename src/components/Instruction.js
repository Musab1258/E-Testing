import { Link } from "react-router-dom";
import rectangle from "../images/Rectangle.svg";

function Instruction() {
  return (
    <div>
        <img src={rectangle} alt="Top rectangle" />
        <h1>Instructions</h1>
        <p>Please read the following instructions carefully.</p>
        <ul>
            <li>Don't be afraid</li>
            <li>wagmi</li>
        </ul>
        <Link to="/Question"><button>Start Now</button></Link>
    </div>  
  );
}

export default Instruction;