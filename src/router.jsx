import { createBrowserRouter } from "react-router-dom";
import ComePage from "./components/come/components/ComePage";
import Home from "./components/home";
import Layout from "./layouts";

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
    ],
  },
]);

export default router;
