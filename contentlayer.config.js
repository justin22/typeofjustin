import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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
})
