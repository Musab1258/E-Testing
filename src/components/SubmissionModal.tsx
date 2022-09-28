import React, { useEffect, useRef } from "react";
import ReactPortal from "./portals/ReactPortal";

const darkBG: React.CSSProperties = {
	width: '100vw',
	height: '100vh',
	zIndex: 0,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	position: 'absolute',
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
		<ReactPortal wrapperId="react-portal-modal-container">
			<div className="bg-black" style={darkBG} ref={nodeRef}>
				{children}
			</div>
		</ReactPortal>
	);
}
export default SubmissionModal;



// import { useEffect, useRef } from "react";
// import { CSSTransition } from "react-transition-group";
// import ReactPortal from "../ReactPortal";
// import "./modalStyles.css";

// function Modal({ children, isOpen, handleClose }) {
// 	const nodeRef = useRef(null);
// 	useEffect(() => {
// 		const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
// 		document.body.addEventListener("keydown", closeOnEscapeKey);
// 		return () => {
// 			document.body.removeEventListener("keydown", closeOnEscapeKey);
// 		};
// 	}, [handleClose]);

// 	return (
// 		<ReactPortal wrapperId="react-portal-modal-container">
// 			<CSSTransition
// 				in={isOpen}
// 				timeout={{ entry: 0, exit: 300 }}
// 				unmountOnExit
// 				classNames="modal"
// 				nodeRef={nodeRef}
// 			>
// 				<div className="modal" ref={nodeRef}>
// 					<button onClick={handleClose} className="close-btn">
// 						Close
// 					</button>
// 					<div className="modal-content">{children}</div>
// 				</div>
// 			</CSSTransition>
// 		</ReactPortal>
// 	);
// }
// export default Modal;