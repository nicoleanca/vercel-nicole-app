import React, { useEffect, useState } from "react";

import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { pages } from "../utils/constants";

const NavBar = () => {
  return (
    <div className={styles.container}>
      {pages.map((page, index) => {
        //
        if (index) {
          return (
            <Link to={page.path} className={styles.navText} key={index}>
              , <span className={styles.hoverUnderlineAnimation}>{page.title}</span>
            </Link>
          );
        } else {
          return (
            <Link to={page.path} className={styles.navText} key={index}>
              <span className={styles.hoverUnderlineAnimation}>{page.title}</span>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default NavBar;
