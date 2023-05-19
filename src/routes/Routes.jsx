import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/shared/Blog";
import PrivateRoute from "../Providers/PrivateRoute";
import Toys from "../pages/Toys/Toys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",

        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/toys",
        element: (
          <PrivateRoute>
            <Toys></Toys>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
