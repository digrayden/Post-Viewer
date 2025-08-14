import styles from './MainLayout.module.css'

interface MainLayoutProp {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout = ({ header, footer, children }: MainLayoutProp) => {
  return (
    <div className={styles.container}>
      {header}
      <main className={styles.main}>
        {children}
      </main>
      {footer}
    </div>
  );
};

export default MainLayout