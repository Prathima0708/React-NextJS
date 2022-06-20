import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
