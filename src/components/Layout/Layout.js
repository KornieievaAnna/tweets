import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { GlowingBtn, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <NavLink to="/">
          <GlowingBtn>Home</GlowingBtn>
        </NavLink>
        <NavLink to="/tweets">
          <GlowingBtn>Tweets</GlowingBtn>
        </NavLink>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
