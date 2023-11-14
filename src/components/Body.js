import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return (
    <div className="h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
