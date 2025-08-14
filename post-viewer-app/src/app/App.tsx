import MainLayout from '../shared/layouts/MainLayout';
import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import PostList from '../widgets/PostList/PostList';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';

function App() {
    return (
      <ThemeProvider>
    <MainLayout 
      header={<Header />}
      footer={<Footer />}
    >
      <PostList />
    </MainLayout>
    </ThemeProvider>
  )
}

export default App
