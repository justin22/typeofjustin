import PostItem from "./PostItem";

const Posts = ({ posts }) => {

  return (
    <>
      {
        posts?.map(post => (
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