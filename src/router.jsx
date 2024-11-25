import { createBrowserRouter } from "react-router-dom";
import ComePage from "./components/come/components/ComePage";
import Home from "./components/home";
import Layout from "./layouts";
import Booking from "./components/booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
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
    ],
  },
]);

export default router;
