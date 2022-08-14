import Link from "next/link";
import { parseDate } from "utils/DateUtil";

const PostItem: React.FC = ({ post }) => {
  return (
    <article>
      <Link href={`/posts/${post.number}`} key={post.id} passHref>
        <div className="mb-8 cursor-pointer group">
          <div className="flex items-start">
            <div className="pr-4 py-2 group-hover:rotate-12 transition-all group-hover:text-purple-600">
              →
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-light group-hover:text-purple-600"> {post.title} </h2>
              <p className="font-light text-sm text-gray-500"> {parseDate(post.updated_at)} </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default PostItem;