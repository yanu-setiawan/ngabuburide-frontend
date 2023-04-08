import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Product from "./Pages/Product";
import Notifications from "./Pages/Notification";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Tracking from "./Pages/OrderTracking"
import AboutUs from "./Pages/AboutUs";
import CommingSoon from "./components/CoomingSoon";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/product", element: <Product /> },
  { path: "/notification", element: <Notifications /> },
  { path: "/chat", element: <Chat /> },
  { path: "/profile", element: <Profile /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/tracking", element: <Tracking /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/commingsoon", element: <CommingSoon /> },

]);

export default router;
