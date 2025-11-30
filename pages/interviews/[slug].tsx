import React from "react";
import { parseDate } from "utils/DateUtil";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { code } from "components/mdx";
import { Dictionary } from "@/components/common/dictionary";
import { NextSeo } from "next-seo";
import removeMarkdown from "remove-markdown";
import { Interview, allInterviews } from "contentlayer/generated";

export async function getStaticPaths() {
  const paths = allInterviews
    .filter((post) => post.published)
    .map((post) => ({
      params: { slug: post.slug },
    }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const postIndex = allInterviews.findIndex(
    (post) => post.slug === params.slug && post.published,
  );
  const post = allInterviews[postIndex];
  const nextPost = allInterviews[postIndex + 1] || null;
  const previousPost = allInterviews[postIndex - 1] || null;
  return {
    props: {
      post: post,
      nextPost,
      previousPost,
    },
  };
}

type IProps = {
  post: Interview;
  nextPost: Interview;
  previousPost?: Interview;
};

const Post: React.FC = ({ post, nextPost }: IProps) => {
  const MDXContent = useMDXComponent(post.body.code);
  const metaImage = post.image || `api/og?title=${post.title}`;
  return (
    <>
      <NextSeo
        title={`${post.title} - typeofjust.in`}
        description={removeMarkdown(post.body.raw).substring(0, 160)}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/${metaImage}`,
            },
          ],
        }}
      />
      <article>
        <div className="mb-10 pb-12">
          <h1 className="text-3xl md:text-4xl tracking-wide font-semibold mb-4 text-gray-900 dark:text-gray-300">
            {" "}
            {post.title}{" "}
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-400">
            {" "}
            {parseDate(post.date)}{" "}
          </p>
        </div>

        <div
          className="prose dark:prose-invert
          !leading-[26px] -tracking-tighter
          text-base
          md:text-lg
          decoration-1
          prose-a:text-sky-700 hover:prose-a:text-sky-800
          dark:prose-a:decoration-sky-400
          dark:prose-p:text-gray-400
          dark:prose-headings:text-gray-300
          dark:prose-a:text-sky-300 hover:dark:prose-a:text-sky-400
          dark:prose-li:text-gray-400
          "
        >
          <MDXContent
            components={{
              code,
              Dictionary,
            }}
          />
        </div>
      </article>

      <div className="mt-12">
        {!nextPost ? (
          <LinkComponent link={`/interviews`} label={"View all interviews"} />
        ) : null}
        {nextPost ? (
          <LinkComponent
            link={`/interviews/${nextPost.slug}`}
            label={nextPost.title}
          />
        ) : null}
      </div>
    </>
  );
};

function LinkComponent({
  link,
  label,
  extraClass,
}: {
  link: string;
  label: string;
  extraClass?: string;
}) {
  return (
    <Link href={link} passHref>
      <a
        className={`
          leading-10 group px-6 py-4 justify-start items-start text-xl transition-all duration-150
          w-full flex
          border border-gray-300 dark:border-gray-800
          rounded-xl
          bg-gray-50 hover:bg-gray-100
          dark:bg-gray-900 dark:hover:bg-black
          text-gray-600 hover:text-gray-800
          dark:text-gray-300 hover:dark:text-gray-50
          ${extraClass}`}
      >
        {label}
      </a>
    </Link>
  );
}

export default Post;
