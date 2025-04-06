import { Link, Links, Navigate, NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <p>This is Home Page</p>
      <div className="mt-4 flex gap-4">
        <NavLink
          to="/btn1"
          className={({ isActive }) => `${isActive && "text-red-600"} btn`}
        >
          Button1
        </NavLink>
        <NavLink
          to="btn2"
          className={({ isActive }) => `${isActive && "text-red-600"} btn`}
        >
          Button2
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
