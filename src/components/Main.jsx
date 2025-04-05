import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
    return (
        <div className="flex flex-col">
            <Navbar></Navbar>         
            <div className="min-h-[calc(100vh-244px)]">
            <Outlet></Outlet> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;