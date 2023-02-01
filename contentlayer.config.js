import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
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
  }
}))

export default makeSource({
  contentDirPath: 'content/posts',
  documentTypes: [Post],
})
