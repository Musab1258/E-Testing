import React from "react";
//import { useLocation } from "react-router-dom"
import candidate from "../images/candidate.svg";

const QuestionNavBar = () => {

    const name: any = (localStorage.getItem('storageKey'))  
    //const location = useLocation();
    //const name = useContext(NameContext);
    return (
        <div className="w-1/3 flex flex-col justify-center items-center bg-blue text-center">
            <img src={candidate} alt="Candidate" className="w-20 mb-4"/>
            <p className="text-yellow text-base mb-16">{name}</p>
            <p className="text-base mb-1">Time Left</p>
            <p className="bg-white py-3 w-64 mb-16 border border-yellow rounded-md">00hr : 10m : 30s</p>
            <div className="m-2">
                <span className="bg-white px-2 m-2">1</span>
                <span className="bg-white px-2 m-2">2</span>
                <span className="bg-white px-2 m-2">3</span>
                <span className="bg-white px-2 m-2">4</span>
                <span className="bg-white px-2 m-2">5</span>
            </div>
            <div className="m-2">
                <span className="bg-white px-2 m-2">6</span>
                <span className="bg-white px-2 m-2">7</span>
                <span className="bg-white px-2 m-2">8</span>
                <span className="bg-white px-2 m-2">9</span>
                <span className="bg-white px-1 m-2">10</span>
                
            </div>
            <div className="m-2">
                <span className="bg-white px-1 m-2">11</span>
                <span className="bg-white px-1 m-2">12</span>
                <span className="bg-white px-1 m-2">13</span>
                <span className="bg-white px-1 m-2">14</span>
                <span className="bg-white px-1 m-2">15</span>
            </div>
            <div className="m-2">
                <span className="bg-white px-1 m-2">16</span>
                <span className="bg-white px-1 m-2">17</span>
                <span className="bg-white px-1 m-2">18</span>
                <span className="bg-white px-1 m-2">19</span>
                <span className="bg-white px-1 m-2">20</span>
            </div>
        </div>
    )
}

export default QuestionNavBar;