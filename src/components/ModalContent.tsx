import React from "react";
import { Link } from "react-router-dom";

const modal: React.CSSProperties = {
	width: '800px',
	height: '200px',
	zIndex: '10',
	borderRadius: '16px',
	boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)',
}

const ModalContent = ( {handleClose, isOpen}) => {
    return (
        <div className="rounded-md flex flex-col justify-center items-center text-center bg-white" style={modal}>
            <p className="text-2xl mb-6">Are you sure you want to submit?</p>
            <div className="flex justify-center items-center">
                <Link to="/SubmissionStatus">
                <button className="text-xl border rounded-md py-2 w-28 bg-blue mr-16 text-white">
                    Yes
                </button>
                </Link>
                <button onClick={handleClose} className="text-xl border rounded-md py-2 w-28 bg-blue mr-16 text-white">
                    No
                </button>
            </div>
        </div>
    )
}

export default ModalContent;