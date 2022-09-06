import React from "react";
import githubAxiosInstance from "utils/GithubAxiosInstance";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { parseDate } from "utils/DateUtil";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Post } from "types/post";

type Props = { post: Post };

const Post: React.FC = (props: Props) => {
  const { post } = props;
  return (
    <>
      <Head>
        <title> {post.title} - typeof just.in </title>
        <meta name="description" content={`A blog by Justin George - ${post.title}`} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <article>
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-normal md:font-normal mb-4 text-gray-700 dark:text-gray-200"> {post.title} </h1>
          <p className="text-md text-gray-500 dark:text-gray-300"> Last updated on {parseDate(post.updated_at)} </p>
        </div>

        <div 
          className="prose dark:prose-invert 
          text-lg md:text-xl font-thin md:leading-relaxed
        dark:prose-a:text-teal-500 hover:prose-a:text-teal-700"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
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