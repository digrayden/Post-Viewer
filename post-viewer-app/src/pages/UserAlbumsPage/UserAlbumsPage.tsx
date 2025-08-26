import { useParams } from 'react-router-dom';
import { useUserAlbums } from '../../features/UserAlbumsPage/model/hooks/useUserAlbums';
import styles from './UserAlbumsPage.module.css'

export const UserAlbumsPage = () => {
  const { id } = useParams();
  const { albums, isLoading, error } = useUserAlbums(id!);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Albums</h2>
      <ul className={styles.albumsList}>
        {albums.map(album => (
          <li key={album.id} className={styles.albumCard}>
            <a href={`/albums/${album.id}/photos`} className={styles.albumId}>{album.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};