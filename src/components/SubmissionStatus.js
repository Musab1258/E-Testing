import rectangle from "../images/Rectangle.svg";
import perxels from "../images/perxels.svg";
import checked from "../images/checked.svg"

const SubmissionStatus = () => {
    return (
        <div>
            <img src={rectangle} alt="Top rectangle" />
            <img src={perxels} alt="Perxels logo" />
            <img src={checked} alt="checked logo" />
            <h1>Submission Successful</h1>
            <p>Your assessment has been successfully submitted. A mail will be sent to you on the next stage of the process. Do have a great day!</p>
            <button>Sign Out</button>
        </div>
    )
}

export default SubmissionStatus;