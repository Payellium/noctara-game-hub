import HomeLayout from "../layouts/HomeLayout";
import Documentation from "../pages/Documentation";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllGames from "../pages/AllGames";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () => fetch("/games.json"),
      },
      {
        path: "/all-games",
        element: <AllGames></AllGames>,
        loader: () => fetch("/games.json"),
      },
      {
        path: "/game-details/:id",
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/games.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/documentation",
        element: <Documentation></Documentation>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/profile/update-profile",
        element: <UpdateProfile></UpdateProfile>
      }
    ],
  },

  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
