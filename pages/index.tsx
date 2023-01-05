import Head from 'next/head';
import Posts from '../components/posts/Index';
import githubAxiosInstance from 'utils/GithubAxiosInstance';
import { GetServerSideProps } from 'next';
import { Posts as PostType } from 'types/post';

type Props = { posts: PostType }

const Home: React.FC = (props: Props) => {
  const { posts } = props;
  return (
    <div>
      <Head>
        <title> typeof just.in . A website by Justin George </title>
        <meta name="description" content="A personal website of Justin George" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="/api/og" />
      </Head>

      <div>
        <Posts
          posts={posts}
        />
      </div>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await githubAxiosInstance.get(`issues?state=closed`)
  return {
    props: { posts: data }
  }
}

export default Home;