import Link from "next/link";
import { FC } from "react";
import Layout from "../components/Layout";
import { getPosts } from "./api/hello";
import styles from "../styles/Product.module.less";
import { Image } from "antd";
import { CardShow } from "@components/CardShow";
const product: FC = ({ posts }: any) => {
  return (
    <Layout>
      <div style={{ height: "80px" }}></div>
      <div className={styles.container}>
        <div className={styles.title_wrapper_content}>
          <div className={styles.title}>
            <span>灵活智能</span>的产品数据管理
          </div>
          <div className={styles.sub_title} style={{ marginBottom: "20px" }}>
            通过打通人员角色、研发数据、变更流程和业务系统，从概念到工程设计、制造、质量、服务和处置来管理产品整个生命周期。
          </div>
          <div className={styles.sub_title} style={{ textAlign: "center" }}>
            深入了解您的产品数据，使您的产品团队能够做出正确的决策并更快地将您的产品推向市场。
          </div>
        </div>
        <div className={styles.title_wrapper_img}>
          <Image preview={false} src="/产品新插图.webp"></Image>
        </div>
        <CardShow></CardShow>
      </div>
      {/* <div>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div> */}
    </Layout>
  );
};
// export async function getStaticProps(context: any) {
//   // const posts = await getPosts();
//   // if (!posts) {
//   //   return {
//   //     notFound: true,
//   //   };
//   // }

//   // return {
//   //   props: { posts },
//   // };
// }
export default product;
