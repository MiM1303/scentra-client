import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ProductsPagination from "../pages/Home/ProductsPagination";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <Error404></Error404>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            // loader: () => fetch("http://localhost:5000/perfumes")
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
            path: "/all-products",
            element: <ProductsPagination></ProductsPagination>,
            loader: () => fetch("http://localhost:5000/all-products-count")
        },
      ]
    },
  ]);