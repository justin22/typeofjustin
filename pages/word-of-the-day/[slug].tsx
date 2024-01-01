import React from "react";
import { parseDate } from "utils/DateUtil";
import Link from "next/link";
import { allWordOfTheDays, WordOfTheDay as WordType } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { code } from 'components/mdx';
import { Dictionary } from "@/components/common/dictionary";
import { NextSeo } from 'next-seo';
import removeMarkdown from 'remove-markdown'
import { TextToSpeech } from '@/components/common/text-to-speech';

export async function getStaticPaths() {
  const paths = allWordOfTheDays.map((post) => ({
    params: { slug: post.word },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export async function getStaticProps({ params }) {
  const wordOfTheDayIndex = allWordOfTheDays.findIndex(post => post.word === params.slug);
  const wordOfTheDay = allWordOfTheDays[wordOfTheDayIndex];
  const nextWordOfTheDay = allWordOfTheDays[wordOfTheDayIndex - 1] || null;
  const previousWordOfTheDay = allWordOfTheDays[wordOfTheDayIndex + 1] || null;
  return {
    props: {
      wordOfTheDay,
      nextWordOfTheDay,
      previousWordOfTheDay
    },
  }
}

type IProps = {
  wordOfTheDay: WordType,
  nextWordOfTheDay: WordType,
  previousWordOfTheDay?: WordType
}

const Post: React.FC = ({ wordOfTheDay, nextWordOfTheDay }: IProps) => {

  const MDXContent = useMDXComponent(wordOfTheDay.body.code);
  const metaImage = `api/og?title=${wordOfTheDay.word}`;

  return (
    <>
      <NextSeo
        title={`${wordOfTheDay.word} - word of the day - typeofjust.in`}
        description={removeMarkdown(wordOfTheDay.body.raw).substring(0, 160)}
        openGraph={{
          images: [{
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${metaImage}`
          }]
        }}
      />
      <article>
        <div className="mb-10 pb-12">
          <p className="text-md text-gray-500 dark:text-gray-400 mb-2"> {parseDate(wordOfTheDay.date)} </p>
          <h1 className="text-3xl md:text-4xl tracking-wide font-normal md:font-normal text-gray-700 dark:text-gray-200"> {wordOfTheDay.word} </h1>
        </div>

        <div
          className="prose dark:prose-invert 
          leading-loose tracking-normal
          text-lg
          prose-h2:text-teal-400
          prose-h3:text-teal-500
          prose-a:no-underline
        prose-a:text-cyan-500 hover:prose-a:text-yellow-600"
        >
          <MDXContent
            components={{
              code,
              Dictionary,
              TextToSpeech
            }}
          />
        </div>
      </article>

      <div className="mt-12">

        {
          !nextWordOfTheDay ?
            <LinkComponent
              link={'/word-of-the-day'}
              label={'All Words'}
              extraClass={'md:rounded-r-none'}
            />
            :
            null
        }
        {
          nextWordOfTheDay ?
            <LinkComponent
              link={`/word-of-the-day/${nextWordOfTheDay.word}`}
              label={nextWordOfTheDay.word}
              extraClass={"md:rounded-l-none"}
              date={nextWordOfTheDay.date}
            />
            :
            null
        }
      </div>
    </>
  )
}

function LinkComponent({ link, label, extraClass, date }: { link: string, label: string, extraClass?: string, date?: string }) {
  return (
    <Link href={link} passHref>
      <a className={`group px-2 rounded-md py-6 justify-start items-start text-md transition-all duration-150 underline underline-offset-8 decoration-pink-500 ${extraClass}`}>
        <span className="text-gray-400"> {date ? parseDate(date) : ''}</span>
        <span className="text-gray-300"> {label} </span>
        <i className='bx bx-right-arrow-alt ml-1 group-hover:ml-2 transition-all duration-150 text-gray-300' ></i>
      </a>
    </Link>
  )
}

export default Post;