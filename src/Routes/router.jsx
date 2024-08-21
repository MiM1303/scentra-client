import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ProductsPagination from "../pages/Home/ProductsPagination";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllProducts from "../pages/AllProducts/AllProducts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <Error404></Error404>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/all-products-count")
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
            path: "/all-products",
            element: <ProductsPagination></ProductsPagination>,
            loader: () => fetch("http://localhost:5000/all-products-count")
        },
        {
          path: "/perfumes",
          element: <AllProducts></AllProducts>,
          loader: () => fetch("http://localhost:5000/perfumes")
      },
      {
        path: `/perfumes/search/:searchText`,
        element: <AllProducts></AllProducts>,
        loader: ({params}) => fetch(`https://meraki-server.vercel.app/available-foods/search/${params.searchText}`)
    },
      ]
    },
  ]);