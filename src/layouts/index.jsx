import { Outlet } from "react-router";
import FloatingButton from "../components/common/components/FloatingButton";
import Modal from "../components/common/components/Modal";
import { useLayoutModeEffect } from "../store/useMode";
import RouterGuard from "./RouterGuard";
import Footer from "./web/Footer";
import Header from "./web/Header";
import Main from "./web/Main";

const Layout = () => {
  useLayoutModeEffect();

  return (
    <RouterGuard>
      <Modal />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <FloatingButton />
      <Footer />
    </RouterGuard>
  );
};

export default Layout;
