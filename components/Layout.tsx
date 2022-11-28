import { FC, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <Fragment>{props.children}</Fragment>
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;
