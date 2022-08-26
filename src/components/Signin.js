import { Link } from "react-router-dom";
import rectangle from "../images/Rectangle.svg";
import perxels from "../images/perxels.svg";

const Signin = () => {
    return (
        <div className="border-2 w-[80rem] min-h-screen shadow-2xl max-h-full flex">
            <img src={rectangle} alt="Top rectangle" className="h-80"/>
            <div className="border-2 w-full text-center flex flex-col justify-center items-center -ml-24" >
                <img src={perxels} alt="Perxels logo" className="w-28 mb-5 -mt-20" />
                <h1 className="text-3xl mb-5 w-2/6 text-blue">Sign in</h1>
                <p className="text-2xl mb-10">Hey there! kindly enter your log in details to access the questions</p>
                <form className="flex flex-col justify-center items-center">
                    <input placeholder="Enter your fullName" className="text-base border rounded-md py-3 pl-4 pr-96 mb-4 text-left" />
                    <input placeholder="Enter your email" className="text-base border py-3 rounded-md pl-4 pr-96 mb-4 text-left" />
                    <input placeholder="Enter your unique password" className="text-base border rounded-md py-3 pl-4 pr-96 mb-6 text-left" />
                    <Link to="/Instruction"><button className="text-base border mb-4 bg-blue text-white rounded-md w-[37.5rem] py-3">Sign In</button></Link>
                    <Link to="/RetrievePassword"><button>Forgot password</button></Link>
                </form>
            </div>
        </div>
    )
}

export default  Signin;