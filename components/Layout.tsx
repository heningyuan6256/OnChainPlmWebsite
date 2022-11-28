import { FC, Fragment, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollAnimateClass } from "../constant";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  useEffect(() => {
    const { WOW } = require("wowjs");
    const wowIns = new WOW({
      boxClass: ScrollAnimateClass,
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false,
    });
    wowIns.init();
    return () => {};
  }, []);
  return (
    <Fragment>
      <Header></Header>
      <Fragment>{props.children}</Fragment>
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;
