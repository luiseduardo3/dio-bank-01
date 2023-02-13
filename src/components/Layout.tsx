import { Footer } from "./Footer";
import { Header } from "./Header";

import LogoDio from "../assets/img/imgdio.png";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header src={LogoDio} alt="Luis" />
      {children}
      {/* <Footer /> */}
    </>
  );
};
