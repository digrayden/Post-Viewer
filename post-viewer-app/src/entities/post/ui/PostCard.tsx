import type { Post } from "../model/types";
import styles from './PostCard.module.css';
import { useNavigate } from 'react-router-dom';

interface PostCardProp {
  post: Post;
  clickable?: boolean;
}

const PostCard = ({ post, clickable = true }: PostCardProp) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (clickable) {
      navigate(`/posts/${post.id}`);
    }
  };
  
  return (
    <article className={`${styles.card} ${clickable ? styles.clickable : ''}`}
    onClick={handleClick}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
    </article>
  );
};

export default PostCard