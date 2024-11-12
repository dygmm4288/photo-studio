import { Outlet } from "react-router";

export const Layout = () => {
  // TODO: mode 감지해서 변경
  return (
    <>
      <Outlet />
    </>
  );
};
