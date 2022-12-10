import { FC, Fragment, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollAnimateClass } from "../constant";
import { useMount } from "../hooks/useMount";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  useMount(() => {
    const { WOW } = require("wowjs");
    const wowIns = new WOW({
      boxClass: ScrollAnimateClass,
      animateClass: "animate__animated",
      offset: 0,
      mobile: true,
      live: false,
    });
    wowIns.init();
    return () => {};
  });
  return (
    <Fragment>
      <Header></Header>
      <Fragment>{props.children}</Fragment>
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;
