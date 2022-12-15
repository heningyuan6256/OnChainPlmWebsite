import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider, Image } from "antd";
import "animate.css";
import "../styles/antd.module.less";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ScrollAnimateClass } from "@constant";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // router.events.on("routeChangeStart", () => {
    //   setLoading(true);
    // });
    // router.events.on("routeChangeComplete", () => {
    //   setLoading(false);
    // });
    // router.events.on("routeChangeError", () => {
    //   setLoading(false);
    // });
  }, []);
  // if (loading) {
  //   return (
  //     <div
  //       className={`plm_loading ${ScrollAnimateClass} animate__fadeOut animate__fadeIn`}
  //     >
  //       <div className={`jump`}>
  //         <Image
  //           src={"/front-plm loaidng logo.svg"}
  //           alt=""
  //           width={64}
  //           height={64}
  //         ></Image>
  //         <Image
  //           src={"/front-onchainnew2.svg"}
  //           alt=""
  //           width={160}
  //           height={33}
  //         ></Image>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <ConfigProvider prefixCls="plm">
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
