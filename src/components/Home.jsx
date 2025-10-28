// import { useContext } from "react";
import { Link, Links, Navigate, NavLink, Outlet } from "react-router-dom";
import { MoneyContext } from "../Context/MoneyContext";

const Home = () => {
  // const [money, setMoney] = useContext(MoneyContext);

  /* const handleMoney = () => {
    setMoney((prev) => {
      const newMoney = parseInt(prev + 100);
      localStorage.setItem("money", newMoney);
      return newMoney;
    });
  }; */

  return (
    <div className="w-11/12 mx-auto">
      <p>This is Home Page</p>
      <div className="mt-4 flex gap-4">
        <NavLink
          to="btn1"
          end
          className={({ isActive }) => `${isActive && "text-red-600"} btn`}
        >
          Button1
        </NavLink>
        <NavLink
          to="/btn2"
          end
          className={({ isActive }) => `${isActive && "text-red-600"} btn`}
        >
          Button2
        </NavLink>
      </div>
      <Outlet></Outlet>

      <NavLink className="btn" to="/btn1/btnExtra">
        Btn Extra from 1
      </NavLink>


      {/*   <h2>{money}</h2>
      <button className="btn" onClick={handleMoney}>
        Add Money
      </button>
      <br /> <br />
      <button
        className="btn"
        onClick={() => {
          setMoney((prev) => {
            const reducedMoney = prev - 100;
            localStorage.setItem("money", parseInt(reducedMoney));
            return reducedMoney;
          });
        }}
      >
        Reduce 100
      </button> */}
    </div>
  );
};

export default Home;
