import { Link, Links, Navigate, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <p>This is Home Page</p>
      <div className="mt-4 flex gap-4">
        <Link to="/" className="btn">Button1</Link>
        <Link to="btn2" className="btn">Button2</Link>
      </div>
        <Outlet></Outlet>
    </div>
  );
};

export default Home;
