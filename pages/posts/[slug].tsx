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
          <h1 className="text-3xl md:text-4xl tracking-wide font-semibold mb-4 text-gray-900"> {post.title} </h1>
          <p className="text-md text-gray-600"> {parseDate(post.date)} </p>
        </div>

        <div
          className="prose 
          leading-loose tracking-normal
          text-sm
          md:text-lg
          prose-h2:text-zinc-900
          prose-h3:text-zinc-800
          prose-a:no-underline
        prose-a:text-blue-600 hover:prose-a:text-purple-600"
        >
          <MDXContent
            components={{
              code,
              Dictionary
            }}
          />
        </div>
      </article>

      <div className="fixed left-4 bottom-4">
        <div className="group flex flex-col items-start">
          <div className="opacity-0 -ml-4 overflow-hidden shadow-2xl border border-gray-50 backdrop-blur-md bg-gray-800 rounded-xl px-6 py-4 transition-all duration-100 ease-linear group-hover:opacity-100 group-hover:ml-0 max-h-96 overflow-y-auto max-w-sm">
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 font-medium font-mono mb-2">Table of contents</p>
              {post.headings.map(heading => {
                return (
                  <a key={`#${heading.slug}`} className="relative flex items-center font-mono truncate" href={`#${heading.slug}`}>
                    <span className="text-gray-500 mr-2">#</span>
                    <span className="text-gray-300 truncate">{heading.text}</span>
                  </a>
                )
              })}
            </div>
          </div>
          <button className="hover:outline-1 bg-white  px-3 py-2 border border-gray-200 rounded-2xl flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-left"><path d="M15 12H3" /><path d="M17 18H3" /><path d="M21 6H3" /></svg>
          </button>
        </div>
      </div>

      <div className="mt-12">
        {
          !nextPost ?
            <LinkComponent
              link={`/posts`}
              label={'View all posts'}
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
            />
            :
            null
        }

      </div>
    </>
  )
}

function LinkComponent({ link, label, extraClass }: { link: string, label: string, extraClass?: string }) {
  return (
    <Link href={link} passHref>
      <a className={`leading-10 group px-2 rounded-md py-6 justify-start items-start text-md transition-all duration-150 underline underline-offset-8 decoration-pink-100 ${extraClass}`}>
        <span className="text-gray-500"> {label} </span>
        <i className='bx bx-right-arrow-alt ml-1 group-hover:ml-2 transition-all duration-150 text-gray-400' ></i>
      </a>
    </Link>
  )
}

export default Post;