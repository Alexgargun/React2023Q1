import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import CardList from "./CardList";

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
            <SearchBar />
            <CardList />
            <Outlet />
          </div>
        </main>
        <footer className="footer">
          <div className="container">
            <h2>Footer</h2>
          </div>
        </footer>
      </>
    );
  }
}

export default Layout;
