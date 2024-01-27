import { Post } from "contentlayer/generated";
import Link from "next/link";

type IProps = {
  post: Post,
  isLast?: boolean
}

export const PostItem = ({ post, isLast = false }: IProps) => {
  return (
    <Link href={`/posts/${post.slug}`} passHref key={post._id}>
      <a>
        <div className={`text-gray-200 text-2xl 
        ${isLast ? '' : 'border-b'}
                   border-gray-800 py-8 hover:bg-gray-800
                  hover:px-4
                  transition-all duration-200
                  flex justify-between items-center
                  group
                  `}>
          <div className='flex items-center justify-center gap-6'>
            <span className='h-2 w-2 rounded bg-gray-600 inline-flex'></span>
            <p className='group-hover:text-red'>
              {post.title}
            </p>
          </div>
          <i className='bx bx-right-arrow-alt hidden group-hover:visible'></i>
        </div>
      </a>
    </Link>
  )
}