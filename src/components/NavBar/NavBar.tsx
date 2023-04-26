import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  const NavMap = [
    { path: '/', name: 'Home' },
    { path: '/movies', name: 'Movies' },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NavMap.map(({ path, name }) => (
          <li key={path}>
            <NavLink className={styles.navLink} to={path} key={path}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
