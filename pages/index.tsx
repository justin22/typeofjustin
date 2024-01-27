import { Introduction } from '@/components/home/intro';
import { PostItem } from '../components/posts/Index';
import { allPosts, Post } from 'contentlayer/generated'
import { NextSeo } from 'next-seo';
import Link from "next/link";

export async function getStaticProps() {
  const posts = allPosts.filter(p => p.published).sort((a, b) => b.position - a.position).map(post => ({
    title: post.title,
    date: post.date,
    slug: post.slug
  }));
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
      <div className='mb-16'>
        <Introduction />
      </div>
      <div>
        <h4 className='text-gray-300 text-lg mb-4'>
          I try to write sometimes, about new things I learn and about the books I read. Here are some of my recent posts.
        </h4>
        <div className='flex flex-col'>
          {
            posts.slice(0, 5).map((post) => {
              return (
                <PostItem
                  post={post}
                  key={post.slug}
                  isLast={post.slug === posts[posts.length - 1].slug}
                />
              )
            })
          }
        </div>
        <div className='flex justify-end'>
          <Link href='/posts' passHref>
            <a className='text-gray-400 text-2xl mt-4 flex align-middle gap-2 hover:text-gray-300
            transition-all duration-200 hover:gap-4
          '>
              <p>See all posts</p>
              <i className='bx bx-right-arrow-alt mt-1.5'></i>
            </a>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Home;