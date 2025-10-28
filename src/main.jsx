import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Main from "./components/Main.jsx";
import AboutChild from "./components/AboutChild.jsx";
import MoneyProvider from "./Provider/MoneyProvider.jsx";
import Contact from "./components/Contact.jsx";
import ContactHome from "./components/Contact/ContactHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/btn1",
            element: (
              <>
                <h2>Hi, I am btn 1</h2>
                <Outlet></Outlet>
              </>
            ),
            children: [
              {
                path: "btnExtra",
                element: <p>I am practice extra</p>,
              },
            ],
          },
          {
            path: "btn2",
            element: <h2>Hi, I am btn 2</h2>,
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
        children: [
          {
            // path: '/about',
            index: true,
            element: <p>Hi, I am about index true nested</p>,
          },
          {
            path: "/about/aboutChild",
            element: <AboutChild></AboutChild>,
            children: [
              {
                index: true,
                element: <p>Hii</p>,
              },
              {
                path: "/about/aboutChild/aboutSuperChild",
                element: <p>Hi, I am super child</p>,
              },
            ],
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        children: [
          {
            index: true,
            element: <ContactHome></ContactHome>,
          },
          {
            path: "contactFather",
            element: (
              <>
                <h2>Should Contact GrandFather</h2>
                <Outlet></Outlet>
              </>
            ),
            children: [
              {
                index: true,
                element: <h2>Kam Shara</h2> 
              },
              {
                path: 'contactGrandFather',
                element: <h2>Ok I will handle it</h2>
              }
            ]
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoneyProvider>
      <RouterProvider router={router}></RouterProvider>
    </MoneyProvider>
  </StrictMode>
);
