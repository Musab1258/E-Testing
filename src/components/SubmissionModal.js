import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const darkBG = {
	width: '100vw',
	height: '100vh',
	zIndex: 0,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	position: 'absolute',
}
  
const centered = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
}
  
const modal = {
	width: '800px',
	height: '200px',
	zIndex: '10',
	borderRadius: '16px',
	boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)',
}
  

function SubmissionModal({ children, isOpen, handleClose }) {
	const nodeRef = useRef(null);
	useEffect(() => {
		const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [handleClose]);

	return (
		<div className="bg-black" style={darkBG} ref={nodeRef}>
			<div style={centered}>
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
			</div>
		</div>
	);
}
export default SubmissionModal;