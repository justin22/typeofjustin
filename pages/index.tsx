import { Introduction } from '@/components/home/intro';
import { PostItem } from '../components/posts/Index';
import { allInterviews, allPosts, Interview, Post } from 'contentlayer/generated'
import { NextSeo } from 'next-seo';
import Link from "next/link";

export async function getStaticProps() {
  const posts = allPosts.filter(p => p.published).sort((a, b) => b.position - a.position).map(post => ({
    title: post.title,
    date: post.date,
    slug: post.slug
  }));


  const interviews = allInterviews.filter(p => p.published).sort((a, b) => b.position - a.position).map(post => ({
    title: post.title,
    date: post.date,
    slug: post.slug
  }));

  return { props: { posts, interviews } }
}

type Props = { posts: Post[], interviews: Interview[] }

const Home: React.FC = (props: Props) => {
  const { posts, interviews } = props;
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
        <div className='flex justify-between align-middle mb-4'>
          <h4 className='text-gray-800 text-xl font-semibold'>
            Writings
          </h4>

        </div>
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
        <Link href='/posts' passHref>
          <a className='text-gray-600 text-md flex align-middle gap-2 hover:text-gray-500
            transition-all duration-200 hover:gap-4 mt-6
          '>
            <p>See all posts</p>
            <i className='bx bx-right-arrow-alt mt-1'></i>
          </a>
        </Link>

      </div>


      <div className='mt-24'>
        <div className='flex justify-between align-middle mb-4'>
          <h4 className='text-gray-800 text-xl font-semibold'>
            Talking with founders
          </h4>

        </div>
        <div className='flex flex-col'>
          {
            interviews.slice(0, 5).map((post) => {
              return (
                <PostItem
                  post={post}
                  key={post.slug}
                  path='interviews'
                  isLast={post.slug === posts[posts.length - 1].slug}
                />
              )
            })
          }
        </div>

        <Link href='/interviews' passHref>
          <a className='text-gray-600 text-md flex align-middle gap-2 hover:text-gray-500
            transition-all duration-200 hover:gap-4
            mt-6
          '>
            <p>See all interviews</p>
            <i className='bx bx-right-arrow-alt mt-1'></i>
          </a>
        </Link>

      </div>

    </div>
  )
}

export default Home;