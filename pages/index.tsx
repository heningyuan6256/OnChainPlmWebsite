import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.less";
import { Button } from "antd";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getPosts } from "./api/hello";
import { FC } from "react";

// home -- first page
const AdvertiseBox: FC = (props) => {
  return (
    <div className={styles.advertise_container}>
      <div className={styles.advertise_box}>
        <div className={styles.advertise_box_title}>
          <span className={styles.advertise_box_title_1}>
            新一代超融合云原生技术
          </span>
          <br />
          <span className={styles.advertise_box_title_2}>
            产品全生命周期赋能平台
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Home({ posts }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className={styles.main}>
        <AdvertiseBox></AdvertiseBox>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
      <Footer></Footer>
    </div>
  );
}

// export async function getStaticProps(context: any) {
//   const posts = await getPosts();
//   if (!posts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { posts },
//   };
// }
