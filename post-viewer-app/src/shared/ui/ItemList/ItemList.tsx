import type { ReactNode } from 'react';
import styles from './ItemList.module.css';

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  className?: string;
}

export const ItemList = <T,>({ items, renderItem }: ItemListProps<T>) => {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};