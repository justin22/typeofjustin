import Head from 'next/head';
import { PostItem } from '../components/posts/Index';
import { allPosts, Post } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts = allPosts.filter(p => p.published).sort((a, b) => b.position - a.position).map(post => ({
    title: post.title,
    date: post.date,
    slug: post.slug
  }))
  return { props: { posts } }
}

type Props = { posts: Post[] }

const Home: React.FC = (props: Props) => {
  const { posts } = props;
  return (
    <div>
      <Head>
        <title> typeof just.in . A website by Justin George </title>
        <meta name="description" content="A personal website of Justin George" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og`} />
      </Head>

      <div>
        {
          posts.map(post => {
            return (
              <PostItem
                post={post}
                key={post.slug}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default Home;