import githubAxiosInstance from "utils/GithubAxiosInstance";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { parseDate } from "utils/DateUtil";


const Post = ({ data }) => {

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

export async function getServerSideProps(context) {
  const { data } = await githubAxiosInstance.get(`issues/${context.params.id}`)
  return {
    props: { data }
  }
}

export default Post;