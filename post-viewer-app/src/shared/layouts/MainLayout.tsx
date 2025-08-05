interface MainLayoutProp {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout = ({ header, footer, children }: MainLayoutProp) => {
  return (
    <div>
      {header}
      <main>
        {children}
      </main>
      {footer}
    </div>
  );
};

export default MainLayout