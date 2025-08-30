import type { ReactNode } from 'react';
import styles from './ItemList.module.css';

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

export const ItemList = <T,>({ items, renderItem, className = '' }: ItemListProps<T>) => {
  return (
    <div className={`${styles.list} ${className}`}>
      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};