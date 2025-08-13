import { useState, useEffect } from 'react';
import { filterByLength } from '../lib/filterByLength';
import styles from './PostLengthFilter.module.css';

interface PostLengthFilterProp {
  allPosts: { id: number; title: string; body: string }[];
  onFilter: (filteredPosts: { id: number; title: string; body: string }[]) => void;
  currentLength: number;
}

const PostLengthFilter = ({ allPosts, onFilter, currentLength }: PostLengthFilterProp) => {
  const [minLength, setMinLength] = useState(currentLength);

  useEffect(() => {
    const filtered = filterByLength(allPosts, minLength);
    onFilter(filtered);
  }, [minLength, allPosts, onFilter]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = parseInt(e.target.value) || 0;
    setMinLength(length);
  };

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