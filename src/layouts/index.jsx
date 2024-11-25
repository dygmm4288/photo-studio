import { Outlet } from "react-router";
import FloatingButton from "../components/common/components/FloatingButton";
import Modal from "../components/common/components/Modal";
import ToastContainer from "../components/common/components/ToastContainer";
import { useLayoutModeEffect } from "../store/useMode";
import Footer from "./web/Footer";
import Header from "./web/Header";
import Main from "./web/Main";

const Layout = () => {
  useLayoutModeEffect();

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <FloatingButton />
      <Footer />
      <Modal />
      <ToastContainer />
    </>
  );
};

export default Layout;
