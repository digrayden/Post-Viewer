import { useParams } from 'react-router-dom';
import { useUserPosts } from '../../features/UserPostsPage/model/hooks/useUserPosts';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './UserPostsPage.module.css';

export const UserPostsPage = () => {
  const { id } = useParams();
  const { posts, isLoading, error } = useUserPosts(id!);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Posts</h2>
      {posts.map(post => (
        <div key={post.id}> 
          <PostCard post={post} />
        </div>
      ))}
      
    </div>
  );
};