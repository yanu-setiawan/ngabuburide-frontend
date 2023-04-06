import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Product from "./Pages/Product";
import Notifications from "./Pages/Notification";
import Chat from "./Pages/Chat";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/product", element: <Product /> },
  { path: "/notification", element: <Notifications /> },
  { path: "/chat", element: <Chat /> },
]);

export default router;
