import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import PostList from "../../widgets/PostList/PostList";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <PostList />
      <Footer />
    </div>
  )
}

export default MainLayout