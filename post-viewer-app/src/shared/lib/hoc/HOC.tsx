import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface WithLoadingProp {
  loading?: boolean;
  children?: ReactNode;
}

export const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & WithLoadingProp) => {
    const [isLoading, setIsLoading] = useState<boolean>(props.loading || true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <div className='loading'>Loading...</div>;
    }

    return <Component {...props as P} />;
  };
};
