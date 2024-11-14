import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Layout from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
