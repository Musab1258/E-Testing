import React from "react";
import { Link } from "react-router-dom";
import QuestionNavBar from "./QuestionNavBar";  

function Question() {
  return (
    <div className="border-2 w-[80rem] min-h-screen shadow-2xl flex">
        <QuestionNavBar />
        <div className="min-h-screen w-full flex flex-col ml-12">
            <div className="border-2 flex flex-col text-left mt-16 mb-8 w-11/12 h-48 rounded-lg pt-8 pl-6">
                <p className="text-lg">Q1:</p>
                <p className="text-lg">What is the first UX information you need to have before you start designing?</p>
            </div>
            <div className="flex flex-col text-left mb-16">
                <ul>
                    <li className="mb-2"> <input type="radio" name="options"/> option 1</li>
                    <li className="mb-2"> <input type="radio" name="options"/> option 2</li>
                    <li className="mb-2"> <input type="radio" name="options"/> option 3</li>
                    <li className="mb-2"> <input type="radio" name="options"/> option 4</li>
                </ul>
            </div>
            <div className="flex justify-center items-center">
                <button className="text-xl border py-2 w-48 bg-blue -ml-32 text-white rounded-md">Previous</button>
                <Link to="/AnotherQuestion"><button className="text-xl border py-2 w-48 bg-blue ml-20 text-white rounded-md">Next</button></Link>
            </div>
        </div>
    </div>  
  );
}

export default Question;