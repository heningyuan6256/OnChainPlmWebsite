import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import "wowjs/css/libs/animate.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider prefixCls="plm">
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
