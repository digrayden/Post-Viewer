import { useState, useCallback } from 'react';
import Button from '../../../shared/ui/Button/Button';
import styles from './CommentList.module.css';

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
    <div className={styles.commentList}>
      {comments.map(comment => {
        const isExpand = expandedComments[comment.id];
        const needsTruncation = comment.body.length > maxPreviewLength && !isExpand;
        const displayText = needsTruncation 
          ? `${comment.body.substring(0, maxPreviewLength)}...` 
          : comment.body;

        return (
          <div key={comment.id} className={styles.comment}>
            <h4>{comment.name}</h4>
            <p>
              {displayText}
              {needsTruncation && (
                <Button
                  onClick={() => toggleComment(comment.id)} 
                  className={styles.showMoreBtn} 
                >
                  Show more
                </Button>
              )}
              {isExpand && (
                <Button
                  onClick={() => toggleComment(comment.id)} 
                  className={styles.showLessBtn}
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