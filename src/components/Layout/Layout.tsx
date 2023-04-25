import { Suspense } from 'react';
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
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
