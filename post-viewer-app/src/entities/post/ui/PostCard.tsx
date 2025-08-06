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
    <article className="post-card">
      <h3 className="post-card_title">{post.title}</h3>
      <p className="post-card_body">{post.body}</p>
    </article>
  );
};

export default PostCard