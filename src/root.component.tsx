import React from "react";
import styles from "./root.component.css";

const Root: React.FC = () => {
  return (
    <div className={styles.main}>
      <h2>Root Component</h2>
      <h3>Code Challenge Repo</h3>
      <h4>Data Structures and Algorithm</h4>
      <h5>Use of Husky and Prettier for code formating</h5>
    </div>
  );
};

export default Root;
