import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Main from "./components/Main.jsx";
import AboutChild from "./components/AboutChild.jsx";
import MoneyProvider from "./Provider/MoneyProvider.jsx";

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
            element: <h2>Hi, I am btn 1</h2>,
          },
          {
            path: "/btn2",
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
                path: "aboutSuperChild",
                element: <p>Hi, I am super child</p>,
              },
            ],
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
