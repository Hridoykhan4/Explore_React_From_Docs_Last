import { Link, Links, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
            {pathname === '/about' ? 'About' : "Home"}
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Navbar;
