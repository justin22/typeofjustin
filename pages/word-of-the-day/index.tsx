import Link from "next/link";
import { parseDate } from "utils/DateUtil";
import { NextSeo } from 'next-seo';
import { WordOfTheDay, allWordOfTheDays } from "contentlayer/generated";

type IProps = {
  word: WordOfTheDay,
  index: number
}

export async function getStaticProps() {
  const words = allWordOfTheDays.sort((a, b) => a.position - b.position);
  return { props: { words } }
}

type Props = { words: WordOfTheDay[] }

const Home: React.FC = (props: Props) => {
  const { words } = props;
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
          words.map((word, index) => {
            return (
              <PostItem
                word={word}
                key={word.word}
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

const PostItem = ({ word, index }: IProps) => {
  return (
    <Link href={`/word-of-the-day/${word.word}`} passHref>
      <a>
        <div className="cursor-pointer group">
          <div className="flex items-start">
            <div className="pr-4 py-1.5 text-gray-500 transition-all group-hover:text-gray-300 dark:group-hover:text-purple-4 dark:text-gray-500">
              {index}.
            </div>
            <div>
              <h2 className="font-system text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-light group-hover:text-teal-600 dark:group-hover:text-teal-400 tracking-wide">
                {word.word}
              </h2>
              <p className="font-light text-sm text-gray-500 group-hover:text-gray-400"> {parseDate(word.date)} </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}