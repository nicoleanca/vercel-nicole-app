import React, { useEffect, useState} from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <div>
    {/* <nav> */}
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <a href=""  className={styles.navText}>
            Home 
            {/* <i className="fa-solid fa-house-user"> </i> */}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href=""  className={styles.navText}>
            About
            {/*  <FontAwesomeIcon icon={faCoffee} size="1x" /> */}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href=""  className={styles.navText}>
            Portofolio
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="" className={styles.navText}>
            CV
          </a>
        </li>
      </ul>
    {/* </nav> */}
    </div>
  )
}

export default NavBar;