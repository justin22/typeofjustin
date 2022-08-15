import PostItem from "./PostItem"

const Posts = ({ posts }) => {
  return (
    <>
      {
        posts?.map((post: any) => (
          <PostItem
            key={post.id}
            post={post}
          />
        ))
      }
    </>
  )
}

export default Posts;