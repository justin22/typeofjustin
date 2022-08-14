import React from "react";
import githubAxiosInstance from "utils/GithubAxiosInstance";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { parseDate } from "utils/DateUtil";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  data: {
    title: string,
    body: string, 
    id: number,
    updated_at: string
  }
}

const Post: React.FC = ({ data }: Props) => {

  return (
    <>
    <Head>
      <title> {data.title} - typeof just.in </title>
      <meta name="description" content={`A blog by Justin George - ${data.title}`} />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <article>
      <div className="mb-10">
        <h1 className="text-4xl md:text-6xl font-normal md:font-normal mb-4 text-gray-700"> {data.title} </h1>
        <p className="text-md text-gray-500"> Last updated on {parseDate(data.updated_at)} </p>
      </div>

      <div className="prose text-lg md:text-xl font-thin text-gray-700 md:leading-relaxed">
        <ReactMarkdown children={data.body} remarkPlugins={[remarkGfm]} />
      </div>
    </article>

    <p className="mt-8 hover:underline text-purple-600">
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
    props: { data }
  }
}

export default Post;