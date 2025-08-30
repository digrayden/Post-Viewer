import { useState, useCallback } from 'react';
import styles from './PostLengthFilter.module.css';

interface PostLengthFilterProps {
  onFilter: (minLength: number) => void;
  currentLength: number;
}

const PostLengthFilter = ({ onFilter, currentLength }: PostLengthFilterProps) => {
  const [minLength, setMinLength] = useState(currentLength);

  const handleFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const length = parseInt(e.target.value) || 0;
    setMinLength(length);
    onFilter(length);
  }, [onFilter]);

  return (
    <div className={styles.filter}>
      <label>
        Filter by title length (min):
        <input 
          type="number" 
          value={minLength} 
          onChange={handleFilter}
          min="0"
        />
      </label>
    </div>
  );
};

export default PostLengthFilter;
