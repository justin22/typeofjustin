import React from "react";
import githubAxiosInstance from "utils/GithubAxiosInstance";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { parseDate } from "utils/DateUtil";
import { GetServerSideProps } from "next";

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
      <div className="mb-10">
        <h1 className="text-6xl font-thin mb-4"> {data.title} </h1>
        <p className="text-sm text-gray-600"> {parseDate(data.updated_at)} </p>
      </div>

      <div className="prose text-2xl font-light text-gray-700 leading-10">
        <ReactMarkdown children={data.body} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await githubAxiosInstance.get(`issues/${context.params.id}`)
  return {
    props: { data }
  }
}

export default Post;