interface MainLayoutProp {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout = ({ header, footer, children }: MainLayoutProp) => {
  return (
    <div className="container">
      {header}
      <main className="main">
        {children}
      </main>
      {footer}
    </div>
  );
};

export default MainLayout