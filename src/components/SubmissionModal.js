import { useState } from "react";
import { Link } from "react-router-dom";

const SubmissionModal = () => {
  return (
      <div>
          <p>Are you sure you want to submit</p>
          <button>Yes</button>
          <button>No</button>
      </div>
  )
}

export default SubmissionModal;