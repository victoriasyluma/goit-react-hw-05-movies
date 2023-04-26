import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import styled from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={styled.header}>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
