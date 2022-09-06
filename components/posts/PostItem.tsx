import Link from "next/link";
import { parseDate } from "utils/DateUtil";

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.number}`} key={post.id} passHref tabIndex={0}>
      <article>
        <div className="mb-8 cursor-pointer group" tabIndex={0}>
          <div className="flex items-start">
            <div className="pr-4 py-2 group-hover:rotate-12 transition-all group-hover:text-teal-600 dark:group-hover:text-purple-4 dark:text-gray-500">
              →
            </div>
            <div>
              <h2 className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-light group-hover:text-teal-600 dark:group-hover:text-teal-400"> {post.title} </h2>
              <p className="font-light text-sm text-gray-500"> {parseDate(post.updated_at)} </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostItem;