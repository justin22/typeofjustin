import { Post } from "contentlayer/generated";
import Link from "next/link";
import { parseDate } from "utils/DateUtil";

type IProps = {
  post: Post
}

export const PostItem = ({ post }: IProps) => {
  return (
    <Link href={`/posts/${post.slug}`} passHref>
      <a>
        <div className="mb-8 cursor-pointer group">
          <div className="flex items-start">
            <div className="pr-4 py-2 group-hover:rotate-12 transition-all group-hover:text-teal-600 dark:group-hover:text-purple-4 dark:text-gray-500">
              →
            </div>
            <div>
              <h2 className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-light group-hover:text-teal-600 dark:group-hover:text-teal-400"> {post.title} </h2>
              <p className="font-light text-sm text-gray-500"> {parseDate(post.date)} </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}