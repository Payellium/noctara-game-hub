import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Documentation from "../pages/Documentation";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllGames from "../pages/AllGames";
import Home from "../pages/Home";

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
        path: "/allGames",
        element: <AllGames></AllGames>,
        loader: () => fetch("/games.json"),
      },
    ],
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
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
