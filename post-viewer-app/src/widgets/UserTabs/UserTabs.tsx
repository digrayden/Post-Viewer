import { NavLink } from 'react-router-dom';
import styles from './UserTabs.module.css';

interface UserTabsProps {
  userId?: number;
}

export const UserTabs = ({ userId }: UserTabsProps) => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <nav className={styles.navigation}>
      <NavLink 
        to="/posts" 
        className={getNavLinkClass}
      >
        Все посты
      </NavLink>
      <NavLink 
        to={`/users/${userId}/posts`} 
        className={getNavLinkClass}
      >
        Posts
      </NavLink>
      <NavLink 
        to={`/users/${userId}/albums`} 
        className={getNavLinkClass}
      >
        Albums
      </NavLink>
      <NavLink 
        to={`/users/${userId}/todos`} 
        className={getNavLinkClass}
      >
        Todos
      </NavLink>
    </nav>
  );
};