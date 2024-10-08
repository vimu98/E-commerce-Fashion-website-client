import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import {createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom"
import Footer from "./components/Footer";
import Carts from "./pages/Carts";
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";

const Layout =()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

 const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        loader: productsData,
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path: "/cart",
        element: <Carts/>
      },
      {
        path: "/login",
        element: <Login/>
      },
    ],
  },
 ])

function App() {
  return (
    <div className="font-bodyFont">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
