import { Interview, Post } from "contentlayer/generated";
import Link from "next/link";

type IProps = {
  post: Post | Interview,
  isLast?: boolean,
  path?: string
}

export const PostItem = ({ post, isLast = false, path = 'posts' }: IProps) => {
  return (
    <Link href={`/${path}/${post.slug}`} passHref key={post._id}>
      <a>
        <div className={`text-gray-700 text-xl md:text-2xl 
        ${isLast ? '' : 'border-b'}
                   border-gray-100 py-8 hover:bg-slate-50
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