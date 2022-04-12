import Nav from "./Nav";
import Placeholder from "../images/placeholder-image.png"

function UserHome({ name }) {
    return (
      <div className="grid grid-cols-4 h-screen">
        <Nav className="col-span-1" />
        <section className="col-span-3 flex flex-col justify-items-center items-center my-auto">
          <img src={Placeholder} alt="" />
          <p>Good Day</p>
          <p>{name}</p>
          <p>Monday</p>
          <p>7/4/2022</p>
          <p>7:00:00 AM</p>
        </section>
      </div>
    )
}

export default UserHome;