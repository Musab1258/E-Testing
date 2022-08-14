import candidate from "../images/candidate.svg";


const QuestionNavBar = () => {
    return (
        <div>
            <img src={candidate} alt="Candidate"/>
            <p></p>
            <p>Time Left</p>
            <p>00hr : 10m : 30s</p>
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </div>
        </div>
    )
}

export default QuestionNavBar;