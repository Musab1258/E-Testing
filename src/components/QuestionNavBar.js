import candidate from "../images/candidate.svg";


const QuestionNavBar = () => {
    return (
        <div className="w-1/4 flex flex-col justify-center items-center bg-blue text-center">
            <img src={candidate} alt="Candidate" className="w-20 mb-4"/>
            <p className="text-yellow text-base mb-16">Zainab Salman</p>
            <p className="text-base">Time Left</p>
            <p className="bg-white p-3 mb-16">00hr : 10m : 30s</p>
            <div>
                <span className="bg-white p-2 m-2">1</span>
                <span className="bg-white p-3">2</span>
                <span className="bg-white p-3">3</span>
                <span className="bg-white p-3">4</span>
            </div>
            <div>
                <span className="bg-white p-2 m-2">5</span>
                <span className="bg-white p-2 m-2">6</span>
                <span className="bg-white p-2 m-2">7</span>
                <span className="bg-white p-2 m-2">8</span>
            </div>
            <div>
                <span className="bg-white p-2 m-2">9</span>
                <span className="bg-white p-2 m-2">10</span>
                <span className="bg-white p-2 m-2">11</span>
                <span className="bg-white p-2 m-2">12</span>
            </div>
            <div>
                <span className="bg-white p-2 m-2">13</span>
            </div>
        </div>
    )
}

export default QuestionNavBar;