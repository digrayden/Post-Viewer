import { useState, useCallback } from 'react';
import Button from '../../../shared/ui/Button/Button';

interface Comment {
  id: number;
  name: string;
  body: string;
}

interface CommentListProps {
  comments: Comment[];
  maxPreviewLength?: number;
}

const CommentList = ({ comments, maxPreviewLength = 100 }: CommentListProps) => {
  const [expandedComments, setExpandedComments] = useState<Record<number, boolean>>({});

  const toggleComment = useCallback((commentId: number) => {
    setExpandedComments(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  }, []);

  return (
    <div className="comment-list">
      {comments.map(comment => {
        const isExpand = expandedComments[comment.id];
        const needsTruncation = comment.body.length > maxPreviewLength && !isExpand;
        const displayText = needsTruncation 
          ? `${comment.body.substring(0, maxPreviewLength)}...` 
          : comment.body;

        return (
          <div key={comment.id} className="comment">
            <h4>{comment.name}</h4>
            <p>
              {displayText}
              {needsTruncation && (
                <Button
                  onClick={() => toggleComment(comment.id)} 
                  className="show-more-btn" 
                >
                  Show more
                </Button>
              )}
              {isExpand && (
                <Button
                  onClick={() => toggleComment(comment.id)} 
                  className="show-less-btn"
                >
                  Roll up
                </Button>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;