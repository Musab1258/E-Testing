import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import rectangle from "../images/Rectangle.svg";


function Instruction() {
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

    fetchUserName();
  }, [user, loading]);

  return (
    <div className="border-2 w-[80rem] min-h-screen shadow-2xl flex">
        <img src={rectangle} alt="Top rectangle" className="h-80" />
        <div className="border-2 w-full flex flex-col justify-center items-center text-center -ml-24" >
        <div className="hidden"><p>Logged in as {name}</p></div>
          <h1 className="text-3xl mb-2 w-2/6 -mt-16 text-blue">Instructions</h1>
          <p className="text-2xl mb-4">Please read the following instructions carefully.</p>
          <ul className="" style={{marginLeft: "-62rem"}}>
              <li className="mb-4 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-4 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-4 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-4 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-4 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-4 list-[circle]">Don't be afraid, wagmi.</li>
              <li className="mb-4 list-[circle]">Don't be afraid, wagmi.</li>
          </ul>
          <Link to="/Question"><button className="text-base border blue bg-blue text-white rounded-md w-[37.5rem] py-3">Start Now</button></Link>
        </div>
    </div>
  );
}

export default Instruction;