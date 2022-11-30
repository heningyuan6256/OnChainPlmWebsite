// pages/posts/[slug].js

import Layout from "../../components/Layout";
import { getSinglePost, getPosts } from "../api/hello";

// PostPage page component
const PostPage = (props: any) => {
  // Render post title and content in the page from props
  return (
    <Layout>
      <div style={{ height: "97px" }}></div>
      <div style={{ margin: "0 auto", width: "1080px" }}>
        <h1>{props.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts: any = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context: any) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default PostPage;
