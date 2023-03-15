import React from "react";
import styles from "../styles/Header.module.css";

export default class Header extends React.PureComponent {
  render() {
    return (
      <section className={styles.section}>
        <div className="container">
          <h2>Home Page</h2>
        </div>
      </section>
    );
  }
}
