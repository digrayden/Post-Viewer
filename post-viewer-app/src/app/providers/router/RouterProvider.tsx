import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../../../shared/layouts/MainLayout';
import Header from '../../../widgets/LayoutHeader/Header';
import Footer from '../../../widgets/LayoutFooter/Footer';
import { PostsPage } from '../../../pages/PostsPage/PostsPage';
import { PostDetailsPage } from '../../../pages/PostDetailsPage/PostDetailsPage';
import { UserAlbumsPage } from '../../../pages/UserAlbumsPage/UserAlbumsPage';
//import { AlbumPhotosPage } from '../../../pages/AlbumPhotosPage/AlbumPhotosPage';
//import { UserTodosPage } from '../../../pages/UserTodosPage/UserTodosPage';
//import { UserPostsPage } from '../../../pages/UserPostsPage/UserPostsPage';

const RouterProvider = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={ <MainLayout 
              header={<Header />}
              footer={<Footer />}
            >
              {}
            </MainLayout>}>
          <Route index element={<PostsPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostDetailsPage />} />
          <Route path="users/:id/albums" element={<UserAlbumsPage />} />

        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterProvider;