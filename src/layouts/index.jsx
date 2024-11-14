import { Outlet } from "react-router";
import Modal from "../components/common/components/Modal";
import ToastContainer from "../components/common/components/ToastContainer";
import { useLayoutModeEffect } from "../store/useMode";
import Header from "./web/Header";

const Layout = () => {
  useLayoutModeEffect();

  return (
    <>
      <Header />
      {/*<Main> */}
      <Outlet />
      {/* </Main>
      <Footer/> */}
      <Modal />
      <ToastContainer />
    </>
  );
};

export default Layout;
