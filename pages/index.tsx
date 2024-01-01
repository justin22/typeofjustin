import { PostItem } from '../components/posts/Index';
import { allPosts, allWordOfTheDays, Post, WordOfTheDay } from 'contentlayer/generated'
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export async function getStaticProps() {
  const posts = allPosts.filter(p => p.published).sort((a, b) => b.position - a.position).map(post => ({
    title: post.title,
    date: post.date,
    slug: post.slug
  }));

  const words = allWordOfTheDays.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const todaysWord = words[0];
  return { props: { posts, todaysWord } }
}

type Props = { posts: Post[], todaysWord: WordOfTheDay }

const Home: React.FC = (props: Props) => {
  const { posts, todaysWord } = props;
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

      <h1 className='text-gray-400 text-2xl mb-8'>Writing</h1>
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

      <div className='flex mt-20 mb-8 text-2xl gap-2'>
        <h2 className='text-gray-400'>
          Word of the day:
        </h2>
        <Link href={`/word-of-the-day/${todaysWord.word}`} passHref>
          <a className='text-teal-400 font-light tracking-wide font-playfair hover:text-teal-500'>
            {todaysWord.word}
          </a>
        </Link>
      </div>

    </div>
  )
}

export default Home;