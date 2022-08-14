import rectangle from "../images/Rectangle.svg";
import perxels from "../images/perxels.svg";


const RetrievePassword = () => {
    return (
        <div>
            <img src={rectangle} alt="Top rectangle" />
            <img src={perxels} alt="Perxels logo" />
            <h1>Retrieve Password</h1>
            <p>Please enter your email address to get your password</p>
            <form>
                <input />
                <submit>Retrieve</submit>
            </form>
        </div>
    )
}

export default  RetrievePassword;