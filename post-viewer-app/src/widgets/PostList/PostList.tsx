import PostCard from "../../entities/post/ui/PostCard";
import { useCallback, useState, useMemo } from "react";
import CommentList from "../../widgets/CommentList/ui/CommentList";
import Button from "../../shared/ui/Button/Button";
import { withLoading } from "../../shared/lib/hoc/HOC";
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import styles from './PostList.module.css';
import { usePosts } from "../../widgets/PostList/model/hooks/usePosts";

const PostListComponent = () => {
  const [showComments, setShowComments] = useState<Record<number, boolean>>({});
  const { posts, isLoading, error } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentMinLength, setCurrentMinLength] = useState(0);

  const toggleComments = useCallback((postId: number) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  }, []);

  const handleFilter = useCallback((newFilteredPosts: typeof posts) => {
    setFilteredPosts(newFilteredPosts);
    if (newFilteredPosts.length > 0) {
      setCurrentMinLength(Math.min(...newFilteredPosts.map(p => p.title.length)));
    } else {
      setCurrentMinLength(0);
    }
  }, []);

  const memoizedPosts = useMemo(() => filteredPosts, [filteredPosts]);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Post List</h2>
      
      <PostLengthFilter 
        allPosts={posts}
        onFilter={handleFilter}
        currentLength={currentMinLength}
      />

      {memoizedPosts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
          <Button onClick={() => toggleComments(post.id)} variant="primary" size="sm">
            {showComments[post.id] ? "Hide Comments" : "Show Comments"}
          </Button>
          {showComments[post.id] && <CommentList postId={post.id} />}
        </div>
      ))}
    </div>
  );
};

const PostList = withLoading(PostListComponent)
export default PostList