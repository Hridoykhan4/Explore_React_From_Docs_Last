import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Main from "./components/Main.jsx";

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
            path: '/',
            element: <h2>Hi, I am btn 1</h2>
          },
          {
            path: '/btn2',
            element: <h2>Hi, I am btn 2</h2>
          }
          
        ]
      },
      {
        path: "/about",
        element: <About></About>,
        children: [
         {
          // path: '/about',
          index:true,
          element: <p>Hi, I am about index true nested</p>
         },
         {
          path: '/about/aboutChild',
          element: <p>Hi Baby</p>
         }
        ]
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
