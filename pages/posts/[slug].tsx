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
  const post = allPosts.find(post => post.slug === params.slug && post.published)
  return {
    props: { post: post },
  }
}

type IProps = {
  post: PostType
}

const Post: React.FC = ({ post }: IProps) => {
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
          <h1 className="text-4xl md:text-6xl tracking-wide font-normal md:font-normal mb-4 text-gray-700 dark:text-gray-200"> {post.title} </h1>
          <p className="text-md text-gray-500 dark:text-gray-400"> {parseDate(post.date)} </p>
        </div>

        <div
          className="prose dark:prose-invert 
          leading-relaxed tracking-wider
          text-lg
          prose-a:no-underline
        prose-a:text-teal-500 hover:prose-a:text-yellow-600"
        >
          <MDXContent
            components={{
              code,
              Dictionary
            }}
          />
        </div>
      </article>

      <p className="mt-12 text-teal-500 hover:text-teal-600 text-center">
        <Link href={"/"}> ← Go to home page </Link>
      </p>

    </>
  )
}

export default Post;