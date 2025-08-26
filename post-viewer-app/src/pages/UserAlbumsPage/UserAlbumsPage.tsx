import { useParams } from 'react-router-dom';
import { useUserAlbums } from '../../features/UserAlbumsPage/model/hooks/useUserAlbums';
import styles from './UserAlbumsPage.module.css'
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import type { Album } from '../../entities/album/model/types';

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { albums, isLoading, error } = useUserAlbums(id!);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  const renderAlbum = (album: Album) => (
    <li key={album.id} className={styles.albumCard}>
      <a href={`/albums/${album.id}/photos`} className={styles.albumId}>
        {album.title}
      </a>
    </li>
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Albums</h2>
      <ItemList items={albums} renderItem={renderAlbum} />
    </div>
  );
};