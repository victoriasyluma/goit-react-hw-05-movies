import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
