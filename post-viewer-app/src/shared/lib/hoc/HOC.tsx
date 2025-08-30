import { useState, useEffect } from 'react';
import type { ReactNode, ComponentType } from 'react';
import styles from './HOC.module.css';

interface WithLoadingProps {
  loading?: boolean;
  children?: ReactNode;
}

export const withLoading = <P extends object>(Component: ComponentType<P>) => {
  return (props: P & WithLoadingProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(props.loading ?? true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <div className={styles.loading}>Loading...</div>;
    }

    return <Component {...props as P} />;
  };
};