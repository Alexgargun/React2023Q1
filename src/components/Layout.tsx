import React from "react";
import { NavLink, Outlet } from "react-router-dom";

interface LayoutProps {}

class Layout extends React.PureComponent<LayoutProps> {
  render(): JSX.Element {
    return (
      <>
        <nav className="header">
          <div className="container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
        </nav>
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </>
    );
  }
}

export default Layout;
