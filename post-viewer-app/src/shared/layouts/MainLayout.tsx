import styles from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';
import type { PropsWithChildren } from 'react';

interface MainLayoutProp {
  header: React.ReactNode;
  footer: React.ReactNode;
  children?: React.ReactNode;
}

const MainLayout = ({ header, footer, children }: PropsWithChildren<MainLayoutProp>) => {
  return (
    <div className={styles.container}>
      {header}
      <main className={styles.main}>
        {children || <Outlet />}
      </main>
      {footer}
    </div>
  );
};

export default MainLayout;