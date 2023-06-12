import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Header } from './SharedLayout.styled';


const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
          </Header>
          <Suspense fallback={<div>Loading page...</div>}></Suspense>
      <Outlet />
    </>
  );
};

export default SharedLayout;
