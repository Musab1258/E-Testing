import rectangle from "../images/Rectangle.svg";
import perxels from "../images/perxels.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
import { useState, useEffect } from "react";

const RetrievePassword = () => {
    const [email, setEmail] = useState<string>("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/Instruction");
        if (error) return;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading, error]);


    return (
        <div className="border-2 w-[80rem] min-h-screen shadow-2xl max-h-full flex">
            <img src={rectangle} alt="Top rectangle" className="h-80"/>
            <div className="border-2 w-full text-center flex flex-col justify-center items-center -ml-24">
                <img src={perxels} alt="Perxels logo" className="w-28 mb-5"/>
                <h1 className="text-3xl mb-5 w-2/6 text-blue">Retrieve Password</h1>
                <p className="text-2xl mb-4">Please enter your email address to get your password</p>
                <div className="flex flex-col justify-center items-center">
                    <input
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email" 
                        className="text-base border py-2 pl-4 pr-96 mb-8 text-left rounded-md" 
                    />
                    <button onClick={() => sendPasswordReset(email)} className="text-base border rounded-md bg-blue text-white w-[37.5rem]  py-3">Retrieve</button>
                </div>
            </div>
        </div>
    )
}

export default  RetrievePassword;