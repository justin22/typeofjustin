import React from "react";
import githubAxiosInstance from "utils/GithubAxiosInstance";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { parseDate } from "utils/DateUtil";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Post } from "types/post";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


type Props = { post: Post };

const Post: React.FC = (props: Props) => {
  const { post } = props;
  return (
    <>
      <Head>
        <title> {post.title} - typeof just.in </title>
        <meta name="description" content={`A blog by Justin George - ${post.title}`} />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og/title=${post.title}`} />
      </Head>
      <article>
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl tracking-wide font-normal md:font-normal mb-4 text-gray-700 dark:text-gray-200"> {post.title} </h1>
          <p className="text-md text-gray-500 dark:text-gray-400"> {parseDate(post.created_at)} </p>
        </div>

        <div
          className="prose dark:prose-invert 
          leading-relaxed tracking-wide
        dark:prose-a:text-teal-500 hover:prose-a:text-teal-700"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}

          >
            {post.body}
          </ReactMarkdown>
        </div>
      </article>

      <p className="mt-12 text-teal-500 hover:text-teal-600 text-center">
        <Link href={"/"}> ← Go to home page </Link>
      </p>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data = null;
  try {
    data = (await githubAxiosInstance.get(`issues/${context.params.id}`)).data;
  } catch (error) {
    console.log('Error while fetching post', error);
  }
  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: { post: data }
  }
}

export default Post;