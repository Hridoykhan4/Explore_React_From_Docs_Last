import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MoneyContext } from "../Context/MoneyContext";

const About = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <p>{money}</p>
      <button
        onClick={() => {
          setMoney((prev) => {
            const newMoney = prev - 100;
            localStorage.setItem("money", newMoney);
            return newMoney;
          });
        }}
      >
        Reduce Money
      </button>
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
