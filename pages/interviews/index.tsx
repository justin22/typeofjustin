import { PostItem } from "@/components/posts/post-item";
import { Interview, allInterviews } from "contentlayer/generated";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  const posts = allInterviews
    .filter((p) => p.published)
    .sort((a, b) => b.position - a.position)
    .map((post) => ({
      title: post.title,
      date: post.date,
      slug: post.slug,
    }));
  return { props: { posts } };
}

type Props = { posts: Interview[] };

const Home: React.FC = (props: Props) => {
  const { posts } = props;
  return (
    <div>
      <NextSeo title="typeof just.in . talking with founders" />
      <h1 className="text-gray-800 dark:text-gray-200 text-lg mb-4">
        While building my own products, to better understand the philosophies
        and the thought process of the makers, I interviewed few of them. Here
        are some of my recent interviews.
      </h1>
      <div className="flex flex-col">
        {posts.map((post) => {
          return <PostItem post={post} path={"interviews"} key={post.slug} />;
        })}
      </div>
    </div>
  );
};

export default Home;
