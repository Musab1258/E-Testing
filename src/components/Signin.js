import { Link } from "react-router-dom";
import rectangle from "../images/Rectangle.svg";
import perxels from "../images/perxels.svg";

const Signin = () => {
    return (
        <div>
            <img src={rectangle} alt="Top rectangle" />
            <img src={perxels} alt="Perxels logo" />
            <h1>Sign in</h1>
            <p>Hey there! kindly enter your log in details to access the questions</p>
            <form>
                <input />
                <input />
                <input />
                <Link to="/Instruction"><button>Sign In</button></Link>
                <Link to="/RetrievePassword"><button>Forgot password</button></Link>
            </form>
        </div>
    )
}

export default  Signin;