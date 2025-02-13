import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import MyRequest from "../pages/MyRequest";
import ManageFoods from "../pages/ManageFoods";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <SignUp />,
      },
      {
        path: '/available-foods',
        element: <AvailableFoods />,
      },
      {
        path: '/add-food',
        element: <PrivateRoutes><AddFood /></PrivateRoutes>,
      },
      {
        path: '/my-request',
        element: <MyRequest />,
      },
      {
        path: '/manage-foods',
        element: <ManageFoods />,
      },
    ]
  },
]);

export default router;