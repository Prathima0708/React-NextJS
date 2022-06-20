import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const x = 3;
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span>News
      </h1>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 5 ? "red" : "blue"};
          }
        `}
      </style> */}
      <p className={styles.description}>
        Keep up to date with the latest web dev news
      </p>
    </div>
  );
};

export default Header;
