import { useEffect, useRef } from "react";
import ReactPortal from "./portals/ReactPortal";

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
			<div className="" ref={nodeRef}>
				<div className="w-3/5 h-1/5 shadow-lg">{children}</div>
			</div>
		</ReactPortal>
	);
}
export default SubmissionModal;