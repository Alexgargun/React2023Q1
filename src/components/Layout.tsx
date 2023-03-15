import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import Blog from "../pages/Blog";

interface LayoutProps {}

class Layout extends React.PureComponent<LayoutProps> {
  render(): JSX.Element {
    return (
      <>
        <header className="header">
          <div className="container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
        </header>
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
