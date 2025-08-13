import PostCard from "../../entities/post/ui/PostCard";
import { useCallback, useState, useMemo } from "react";
import CommentList from "../../widgets/CommentList/ui/CommentList";
import { somePosts, someComments } from "./constants";
import Button from "../../shared/ui/Button/Button";
import { withLoading } from "../../shared/lib/hoc/HOC";
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import styles from './PostList.module.css';

const PostListComponent = () => {
  const [showComments, setShowComments] = useState<Record<number, boolean>>({});
  const [filteredPosts, setFilteredPosts] = useState(somePosts);
  const [currentMinLength, setCurrentMinLength] = useState(0);

  const toggleComments = useCallback((postId: number) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  }, []);

  const handleFilter = useCallback((newFilteredPosts: typeof somePosts) => {
    setFilteredPosts(newFilteredPosts);
    if (newFilteredPosts.length > 0) {
      setCurrentMinLength(Math.min(...newFilteredPosts.map(p => p.title.length)));
    } else {
      setCurrentMinLength(0);
    }
  }, []);

  const memoizedPosts = useMemo(() => filteredPosts, [filteredPosts]);

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Post List</h2>
      
      <PostLengthFilter 
        allPosts={somePosts}
        onFilter={handleFilter}
        currentLength={currentMinLength}
      />

      {memoizedPosts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
          <Button onClick={() => toggleComments(post.id)} variant="secondary" size="sm">
            {showComments[post.id] ? "Hide Comments" : "Show Comments"}
          </Button>
          {showComments[post.id] && <CommentList comments={someComments} />}
        </div>
      ))}
    </div>
  );
};

const PostList = withLoading(PostListComponent)
export default PostList