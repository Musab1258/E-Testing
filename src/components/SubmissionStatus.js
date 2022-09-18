import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import rectangle from "../images/Rectangle.svg";
import perxels from "../images/perxels.svg";
import checked from "../images/checked.svg"


const SubmissionStatus = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
  
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
  
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        if (error) return;

        fetchUserName();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user, loading, error]);

    return (
        <div className="border-2 w-[80rem] min-h-screen shadow-2xl flex">
            <img src={rectangle} alt="Top rectangle" className="h-80" />
            <div className="border-2 w-full flex flex-col justify-center items-center text-center -ml-24">
                <img src={perxels} alt="Perxels logo" className="w-28 -mt-6 mb-8" />
                <div className="hidden"><p>Logged in as {name}</p></div>
                <img src={checked} alt="checked logo" className="h-2/5 py-4 px-2 mb-8"/>
                <h1 className="text-3xl w-2/6  mb-4 text-blue">Submission Successful</h1>
                <p className="text-lg w-2/4 mb-4">Your assessment has been successfully submitted. A mail will be sent to you on the next stage of the process. Do have a great day!</p>
                <button
                    onClick={logout} 
                    className="text-xl border rounded-md py-2 w-56 bg-blue ml-20 text-white"
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default SubmissionStatus;