import { Introduction } from "@/components/home/intro";
import { PostItem } from "../components/posts/Index";
import {
  allInterviews,
  allPosts,
  Interview,
  Post,
} from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts
    .filter((p) => p.published)
    .sort((a, b) => b.position - a.position)
    .map((post) => ({
      title: post.title,
      date: post.date,
      slug: post.slug,
    }));

  const interviews = allInterviews
    .filter((p) => p.published)
    .sort((a, b) => b.position - a.position)
    .map((post) => ({
      title: post.title,
      date: post.date,
      slug: post.slug,
    }));

  return { props: { posts, interviews } };
}

type Props = { posts: Post[]; interviews: Interview[] };

const Home: React.FC = (props: Props) => {
  const { posts, interviews } = props;
  return (
    <div>
      <div className="mb-16">
        <Introduction />
      </div>
      <div>
        <div className="flex justify-between align-middle mb-4">
          <h4 className="text-gray-600 dark:text-gray-300 text-xl font-semibold">
            Writings
          </h4>
        </div>
        <div className="flex flex-col">
          {posts.map((post) => {
            return <PostItem post={post} key={post.slug} />;
          })}
        </div>
      </div>

      <div className="mt-24">
        <div className="flex justify-between align-middle mb-4">
          <h4 className="text-gray-600 dark:text-gray-300 text-xl font-semibold">
            Talking with founders
          </h4>
        </div>
        <div className="flex flex-col">
          {interviews.map((post) => {
            return <PostItem post={post} key={post.slug} path="interviews" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
