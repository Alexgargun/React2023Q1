import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <nav className="header">
        <div className="container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="forms">Forms</NavLink>
        </div>
      </nav>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
