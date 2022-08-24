import rectangle from "../images/Rectangle.svg";
import perxels from "../images/perxels.svg";
import checked from "../images/checked.svg"
import { Link } from "react-router-dom";

const SubmissionStatus = () => {
    return (
        <div className="border-2 max-w-screen-xl min-h-screen shadow-2xl flex">
            <img src={rectangle} alt="Top rectangle" className="h-80" />
            <div className="border-2 w-full flex flex-col justify-center items-center text-center -ml-24">
                <img src={perxels} alt="Perxels logo" className="w-28 -mt-6 mb-8" />
                <img src={checked} alt="checked logo" className="h-2/5 py-4 px-2 mb-8"/>
                <h1 className="text-3xl w-2/6  mb-4 text-blue">Submission Successful</h1>
                <p className="text-lg w-2/4 mb-4">Your assessment has been successfully submitted. A mail will be sent to you on the next stage of the process. Do have a great day!</p>
                <Link to="/"><button className="text-xl border py-2 w-56 bg-blue ml-20 text-white">Sign Out</button></Link>
            </div>
        </div>
    )
}

export default SubmissionStatus;