import { createPortal } from "react-dom";
import { RouterProvider } from "react-router-dom";
import ToastContainer from "./components/common/components/ToastContainer";
import GlobalStyle from "./css/global";
import router from "./router";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      {createPortal(<ToastContainer />, document.getElementById("toast-root"))}
    </>
  );
}

export default App;
