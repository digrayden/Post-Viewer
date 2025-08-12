import PostCard from "../../entities/post/ui/PostCard";
import { useCallback, useState } from "react";
import CommentList from "../../widgets/CommentList/ui/CommentList";
import { somePosts, someComments } from "./constants";
import Button from "../../shared/ui/Button/Button";

const PostList = () => {
  const [showComments, setShowComments] = useState<Record<number, boolean>>({});

  const toggleComments = useCallback((postId: number) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  }, []);

  return (
    <div className="post-list">
      <h2 className="post-list_title">Post List</h2>
      
      {somePosts.map((post) => (
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

export default PostList