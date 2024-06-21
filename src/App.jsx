import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Blogdetails from "./pages/Blogdetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // dynamic routing
  {
    path: "/blog/:id",
    element: <Blogdetails />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
