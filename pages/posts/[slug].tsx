import React from "react";
import { parseDate } from "utils/DateUtil";
import Link from "next/link";
import { allPosts, Post as PostType } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { code } from 'components/mdx';
import { Dictionary } from "@/components/common/dictionary";
import { NextSeo } from 'next-seo';
import removeMarkdown from 'remove-markdown'

export async function getStaticPaths() {
  const paths = allPosts.filter(post => post.published).map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export async function getStaticProps({ params }) {
  const postIndex = allPosts.findIndex(post => post.slug === params.slug && post.published)
  const post = allPosts[postIndex];
  const nextPost = allPosts[postIndex + 1] || null;
  const previousPost = allPosts[postIndex - 1] || null;
  return {
    props: {
      post: post,
      nextPost,
      previousPost
    }
  }
}

type IProps = {
  post: PostType,
  nextPost: PostType,
  previousPost?: PostType
}

const Post: React.FC = ({ post, nextPost }: IProps) => {
  const MDXContent = useMDXComponent(post.body.code);
  const metaImage = post.image || `api/og?title=${post.title}`
  return (
    <>
      <NextSeo
        title={`${post.title} - typeofjust.in`}
        description={removeMarkdown(post.body.raw).substring(0, 160)}
        openGraph={{
          images: [{
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${metaImage}`
          }]
        }}
      />
      <article>
        <div className="mb-10 pb-12">
          <h1 className="text-3xl md:text-4xl tracking-wide font-normal md:font-normal mb-4 text-gray-700 dark:text-gray-200"> {post.title} </h1>
          <p className="text-md text-gray-500 dark:text-gray-400"> {parseDate(post.date)} </p>
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
              Dictionary
            }}
          />
        </div>
      </article>

      <div className="mt-12">
        {
          !nextPost ?
            <LinkComponent
              link={`/posts`}
              label={'View all'}
              extraClass={"md:rounded-r-none"}
            />
            :
            null
        }
        {
          nextPost ?
            <LinkComponent
              link={`/posts/${nextPost.slug}`}
              label={nextPost.title}
              extraClass={"md:rounded-l-none"}
              date={nextPost.date}
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
      <a className={`leading-10 group px-2 rounded-md py-6 justify-start items-start text-md transition-all duration-150 underline underline-offset-8 decoration-pink-500 ${extraClass}`}>
        <span className="text-gray-400"> {date ? parseDate(date) : ''}</span>
        <span className="text-gray-300"> {label} </span>
        <i className='bx bx-right-arrow-alt ml-1 group-hover:ml-2 transition-all duration-150 text-gray-300' ></i>
      </a>
    </Link>
  )
}

export default Post;