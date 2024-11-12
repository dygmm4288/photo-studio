import { Outlet } from "react-router";
import Modal from "../components/common/components/Modal";

export const Layout = () => {
  // TODO: mode 감지해서 변경
  return (
    <>
      {/* <Header/>
      <Main> */}
      <Outlet />
      {/* </Main>
      <Footer/> */}
      <Modal />
    </>
  );
};
