import { PostItem } from '@/components/posts/post-item';
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
        title="typeof just.in . blog posts by Justin"
      />
      <h1 className='text-gray-800 text-lg mb-4'>
        I write sometimes, about new things I learn and about the books I read. Here are some of my recent posts.
      </h1>
      <div className='flex flex-col'>
        {
          posts.map((post) => {
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