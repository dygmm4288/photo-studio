import { createBrowserRouter } from "react-router-dom";
import Booking from "./components/booking";
import ComePage from "./components/come/components/ComePage";
import Home from "./components/home";
import Introduce from "./components/introduce/components/Introduce";
import Layout from "./layouts";
import Gallery from "./components/gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/come",
        element: <ComePage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "introduce",
        element: <Introduce />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);

export default router;
