import Link from "next/link";
import { FC } from "react";
import Layout from "../components/Layout";
import { getPosts } from "./api/hello";

const product: FC = ({ posts }: any) => {
  return (
    <Layout>
      <div style={{ height: "80px" }}></div>
      <div>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export async function getStaticProps(context: any) {
  const posts = await getPosts();
  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}
export default product;
