import Link from "next/link";
import { parseDate } from "utils/DateUtil";

const PostItem = ({ post, count }) => {
  return (
    <Link href={`/posts/${post.number}`} key={post.id} passHref>
      <div className="mb-8 cursor-pointer">
        <div className="flex items-start">
          <div className="px-4 py-2 bg-gray-50 mr-2 mt-1">
            {count}
          </div>
          <div>
            <h2 className="text-2xl font-light hover:text-gray-500"> {post.title} </h2>
            <p className="font-light text-sm"> {parseDate(post.updated_at)} </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostItem;