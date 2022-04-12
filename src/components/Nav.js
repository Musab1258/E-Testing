import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="flex flex-col bg-black text-white text-lg ">
            <h1 className="text-4xl m-16">Computer Based Test</h1>
            <ul>
              <li className="my-10 ml-3"><Link to="/UserHome">Home</Link></li>
              <li className="my-10 ml-3"><Link to="/Exams">Exams</Link></li>
              <li className="my-10 ml-3"><Link to="Results">Results</Link></li>
              <li className="mt-16 mx-24 py-2 px-4 border rounded bg-white text-black text-center"><button><Link to="/">Logout</Link></button></li>
            </ul>
        </nav>
    )
}

export default Nav;