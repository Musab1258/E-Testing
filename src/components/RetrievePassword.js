import { Link } from "react-router-dom";
import rectangle from "../images/Rectangle.svg";
import perxels from "../images/perxels.svg";


const RetrievePassword = () => {
    return (
        <div className="border-2 max-w-screen-xl min-h-screen shadow-2xl max-h-full flex">
            <img src={rectangle} alt="Top rectangle" className="h-80"/>
            <div className="border-2 w-full text-center flex flex-col justify-center items-center -ml-24">
                <img src={perxels} alt="Perxels logo" className="w-28 mb-5"/>
                <h1 className="text-3xl mb-5 w-2/6 text-blue">Retrieve Password</h1>
                <p className="text-2xl mb-4">Please enter your email address to get your password</p>
                <form className="flex flex-col justify-center items-center">
                    <input placeholder="Enter your email" className="text-base border py-2 pl-4 pr-96 mb-2 text-left" />
                    <Link to="/"><submit className="text-base border mb-2 bg-blue text-white w-[37.5rem] py-2">Retrieve</submit></Link>
                </form>
            </div>
        </div>
    )
}

export default  RetrievePassword;