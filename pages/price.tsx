import Head from "next/head";
import { FC, Fragment } from "react";
import Layout from "../components/Layout";
import { ScrollAnimateClass } from "../constant";
import styles from "../styles/log.module.less";
const price: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>OnChain PLM 平台</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div style={{ height: "80px" }}></div>
      </Layout>
    </Fragment>
  );
};

export default price;