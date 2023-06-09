import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Component/Login/Login";
import Shop from "./Component/Main/Shop";
import LandingPage from "./Component/LandingPage/LandingPage";
import Order from "./Component/Order/Order";
import AuthProvider from "./Component/Provider/AuthProvider";
import PrivateRoute from "./Component/Routes/PrivateRoute";
import Confirmed from "./Component/Order/Confirmed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "shop",
        element: (
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        ),
      },
      {
        path: "order",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "thankyou",
        element: (
          <PrivateRoute>
            <Confirmed />
          </PrivateRoute>
        ),
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
