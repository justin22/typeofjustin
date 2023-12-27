import { Post } from "contentlayer/generated";
import Link from "next/link";
import { parseDate } from "utils/DateUtil";

type IProps = {
  post: Post,
  index: number
}

export const PostItem = ({ post, index }: IProps) => {
  return (
    <Link href={`/posts/${post.slug}`} passHref>
      <a>
        <div className="cursor-pointer group">
          <div className="flex items-start">
            <div className="pr-4 py-1.5 text-gray-500 transition-all group-hover:text-gray-300 dark:group-hover:text-purple-4 dark:text-gray-500">
              {index}.
            </div>
            <div>
              <h2 className="font-system text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-light group-hover:text-teal-600 dark:group-hover:text-teal-400 tracking-wide"> {post.title} </h2>
              <p className="font-light text-sm text-gray-500 group-hover:text-gray-400"> {parseDate(post.date)} </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}