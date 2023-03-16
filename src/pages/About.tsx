import React from "react";
import styles from "../styles/About.module.css";
const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);


class About extends React.PureComponent {
  render() {
    return (
      <div className={styles.section}>
        <h2>About</h2>
      </div>
    );
  }
}
export default About;
