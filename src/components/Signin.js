import { Link } from "react-router-dom";


const Signin = () => {
    return (
        <div>
            <img src="./images/Rectangle.svg" alt="Top rectangle" />
            <img src="./images/perxels.svg" alt="Perxels logo" />
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