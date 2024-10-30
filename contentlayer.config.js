import GithubSlugger from "github-slugger"
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from "rehype-slug";

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'url for the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    position: {
      type: 'number',
      description: 'The order in which post should appear, max number first',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the blog is live or not',
      required: false,
      default: false
    },
    image: {
      type: 'string',
      description: 'meta image for the post',
      required: false,
    },
  },
  computedFields: {
    headings: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{1,3})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger()
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag?.length == 1 ? "1"
                : flag?.length == 2 ? "2"
                  : "3",
              text: content,
              slug: content ? slugger.slug(content) : undefined
            };
          }
        );
        return headings;
      },
    }
  }
}))
export const Interview = defineDocumentType(() => ({
  name: 'Interview',
  filePathPattern: `interviews/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the interview',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'url for the interview',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the interview',
      required: true,
    },
    position: {
      type: 'number',
      description: 'The order in which interviews should appear, max number first',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the interview is live or not',
      required: false,
      default: false
    },
    image: {
      type: 'string',
      description: 'meta image for the interview',
      required: false,
    },
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Interview],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
    ],
  },
})
