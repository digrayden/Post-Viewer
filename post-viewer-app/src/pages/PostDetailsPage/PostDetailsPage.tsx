import { useParams } from 'react-router-dom';
import { usePost } from './model/hooks/usePost';
import PostCard from '../../entities/post/ui/PostCard';
import CommentList from '../../widgets/CommentList/ui/CommentList';
import styles from './PostDetailsPage.module.css';

export const PostDetailsPage = () => {
  const { id } = useParams();
  const { post, isLoading, error } = usePost(id!);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      {post && <PostCard post={post} clickable={false} />}
      <h3 className={styles.commentsTitle}>Comments:</h3>
      <CommentList postId={Number(id)} />
    </div>
  );
};