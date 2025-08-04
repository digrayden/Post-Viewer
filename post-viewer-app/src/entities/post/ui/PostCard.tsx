interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProp {
  post: Post;
}

const PostCard = ({ post }: PostCardProp) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  );
};

export default PostCard