import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/shared/Blog";
import PrivateRoute from "../Providers/PrivateRoute";
import Toys from "../pages/Toys/Toys";
import SingleToy from "../pages/Toys/SingleToy";
import AddToys from "../pages/Toys/addToys";
import UpdatingToys from "../pages/Toys/UpdatingToys";
import UpdateAToys from "../pages/Toys/UpdateAToys";

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
        element: <Toys></Toys>,
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-world-server-ashik-faysal.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/addToys",
        element: <AddToys />,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <UpdatingToys></UpdatingToys>
          </PrivateRoute>
        ),
      },
      {
        path: "updateAToys",
        element: <UpdateAToys />,
      },
    ],
  },
]);

export default router;
