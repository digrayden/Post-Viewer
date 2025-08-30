import { useParams } from 'react-router-dom';
import { useAlbumPhotos } from '../../features/AlbumPhotosPage/model/hooks/useAlbumPhotos';
import styles from './AlbumPhotosPage.module.css';

export const AlbumPhotosPage = () => {
  const { id } = useParams();
  const { photos, isLoading, error } = useAlbumPhotos(id!);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Photos</h2>
      <div className={styles.photosList}>
        {photos.map(photo => (
          <div className={styles.photosCard} key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p className={styles.title}>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};