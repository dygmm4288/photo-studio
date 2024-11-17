import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalStyle from "./css/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
