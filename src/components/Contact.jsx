import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
    return (
      <div>
        <h2 className="text-center">I am Contact</h2>
        <NavLink to="contactFather">Wanna Contact Father</NavLink>
                
        <div className="my-10">
          <Outlet></Outlet>
        </div>

      </div>
    );
};

export default Contact;