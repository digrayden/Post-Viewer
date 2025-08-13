import styles from './PostCard.module.css';

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
    <article className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
    </article>
  );
};

export default PostCard