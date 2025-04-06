import { Link, Outlet } from "react-router-dom";

const AboutChild = () => {
  return (
    <div>
      <Link className="btn" to="">Dont Goo</Link>
      <Link className="btn" to="aboutSuperChild"> Goo</Link>
      <Outlet></Outlet>
      {/* <link to="">GO GO GO</link> */}
    </div>
  );
};

export default AboutChild;
