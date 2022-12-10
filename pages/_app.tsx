import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import "animate.css"
import "../styles/antd.module.less";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider prefixCls="plm">
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
