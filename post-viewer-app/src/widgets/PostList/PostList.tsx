import PostCard from "../../entities/post/ui/PostCard";
import { useCallback, useState, useMemo } from "react";
import CommentList from "../../widgets/CommentList/ui/CommentList";
import { somePosts, someComments } from "./constants";
import Button from "../../shared/ui/Button/Button";
import { withLoading } from "../../shared/lib/hoc/HOC";
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import styles from './PostList.module.css';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';

const PostListComponent = () => {
  const [showComments, setShowComments] = useState<Record<number, boolean>>({});
  const [minLength, setMinLength] = useState(0);

  const toggleComments = useCallback((postId: number) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  }, []);

 const handleFilter = useCallback((newMinLength: number) => {
    setMinLength(newMinLength);
  }, []);

  const filteredPosts = useMemo(() => {
    return filterByLength(somePosts, minLength);
  }, [minLength]);

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Post List</h2>
      
      <PostLengthFilter 
              onFilter={handleFilter}
              currentLength={minLength}
      />

      {filteredPosts.map((post) => (
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