import { Interview, Post } from "contentlayer/generated";
import Link from "next/link";

type IProps = {
  post: Post | Interview;
  path?: string;
};

export const PostItem = ({ post, path = "posts" }: IProps) => {
  return (
    <Link href={`/${path}/${post.slug}`} passHref key={post._id}>
      <a>
        <div
          className={`
            text-sky-700 hover:text-sky-900
            dark:text-sky-300 hover:dark:text-sky-400
            font-medium text-md md:text-lg py-2
                  hover:px-1
                  transition-all duration-200
                  flex justify-between items-center
                  group
                  `}
        >
          <div className="flex items-center justify-center gap-6">
            <span className="h-1 w-1 rounded bg-gray-600 inline-flex group-hover:rounded-none group-hover:bg-sky-500"></span>
            <p className="group-hover:text-red">{post.title}</p>
          </div>
          <i className="bx bx-right-arrow-alt hidden group-hover:visible"></i>
        </div>
      </a>
    </Link>
  );
};
