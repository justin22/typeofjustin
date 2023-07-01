import { PostItem } from '../components/posts/Index';
import { allPosts, Post } from 'contentlayer/generated'
import { NextSeo } from 'next-seo';

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
      <NextSeo
        title="typeof just.in . A website by Justin George"
        description="A personal website of Justin George"
        openGraph={{
          images: [{
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og`
          }]
        }}
      />

      <div className='flex flex-col gap-12'>
        {
          posts.map((post, index) => {
            return (
              <PostItem
                post={post}
                key={post.slug}
                index={index + 1}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default Home;