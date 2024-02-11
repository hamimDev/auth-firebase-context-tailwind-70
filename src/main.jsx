import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./layout/Root";
import Home from "./layout/Home/Home";
import Register from "./layout/Register/Register";
import Login from "./layout/Login/Login";
import AuthProviders from "./providers/AuthProviders";
import Order from "./layout/Order/Order";
import PrivateRoute from "./layout/p.routes/privateRoute";
import LoginPrivateRoute from "./layout/p.routes/LoginPrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
      {
        path: "/login",
        element: <LoginPrivateRoute><Login></Login></LoginPrivateRoute>,
      }, 
      {
        path: "/orders",
        element: <PrivateRoute><Order></Order></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);