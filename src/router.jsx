import { createBrowserRouter } from "react-router-dom";
import Booking from "./components/booking";
import ComePage from "./components/come/components/ComePage";
import Home from "./components/home";
import Layout from "./layouts";

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
        path: "gallery",
        element: <div>갤러리</div>,
      },
    ],
  },
]);

export default router;
