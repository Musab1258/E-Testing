import React, { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import QuestionNavBar from "./QuestionNavBar";  
import SubmissionModal from "./SubmissionModal";
import ModalContent from "./ModalContent";

const centered: CSSProperties = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
}


function AnotherQuestion() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClose = () => setIsOpen(false);

  return (
    <div className="border-2 w-[80rem] min-h-screen shadow-2xl flex">
        <QuestionNavBar />
        <div className="min-h-screen w-full flex flex-col ml-12">
            <div className="border-2 flex flex-col text-left mt-16 mb-8 w-11/12 h-48 rounded-lg pt-8 pl-6">
                <p className="text-lg text-grey">Q1:</p>
                <p className="text-lg">What is the first UX information you need to have before you start designing?</p>
            </div>
            <div className="flex flex-col text-left mb-16">
                <textarea placeholder="Type your answer here" rows={5} className="w-11/12 h-32 bg-grey" style={{border: 'none', backgroundColor: 'transparent', resize: 'none', outline: 'none'}}/>
            </div>
            <div className="flex justify-center items-center">
                <Link to="/Question"><button className="text-xl border py-2 w-48 bg-blue -ml-32 text-white">Previous</button></Link>
                <button onClick={() => setIsOpen(true)} className="text-xl border py-2 w-48 bg-blue ml-20 text-white">Submit</button>
            </div>
        </div>

        { 
            isOpen && 
            <SubmissionModal handleClose={handleClose} isOpen={isOpen}>
            <div style={centered}>
                <ModalContent handleClose={handleClose} isOpen={isOpen} />
			</div>
            </SubmissionModal>
        }
    </div>  
  );
}

export default AnotherQuestion;