import { Link, Outlet } from "react-router-dom";
import { MoneyContext } from "../Context/MoneyContext";

const About = () => {
  return (
    <div>
      <p>This is about page</p>
      <Outlet></Outlet>
    {/*   <Link to="/about" className="btn my-4">
        Asi Re bhai
      </Link> */}
      <Link to="/about/aboutChild" className="btn my-4">
        Click To see other thing
      </Link>
    </div>
  );
};

export default About;
