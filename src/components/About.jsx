import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p>This is about page</p>
      <Link to="/about" className="btn my-4">
        Asi Re bhai
      </Link>
      <Link to="/about/aboutChild" className="btn my-4">
        Click To see other thing
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
