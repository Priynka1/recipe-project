import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import Body from "./component/Body";
import Header from "./component/Header";
import { Footer } from "./component/Footer";
import { createBrowserRouter, Outlet } from "react-router";
// import About from "./component/About";
import { RouterProvider } from "react-router";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./component/About"));

const Applayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout></Applayout>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Body></Body> },
      {
        path: "/about",
        element: (
          <Suspense>
            <About></About>
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
