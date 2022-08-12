import PostItem from "./PostItem.tsx";

const Posts = ({ posts }) => {

  return (
    <>
      {
        posts?.map((post, index) => (
          <PostItem
            count={index + 1}
            key={post.id}
            post={post}
          />
        ))
      }
    </>
  )
}

export default Posts;