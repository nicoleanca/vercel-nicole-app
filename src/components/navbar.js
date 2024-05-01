import React, { useEffect, useState} from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.module.css'

const NavBar = () => {
  return (
    <div>
    {/* <nav> */}
      <ul className="navas">
        <li className="navaItem">
          <a  className="navaText">
            Home 
            {/* <i className="fa-solid fa-house-user"> </i> */}
          </a>
        </li>
        <li className="navaItem">
          <a  className="navaText">
            About
            {/*  <FontAwesomeIcon icon={faCoffee} size="1x" /> */}
          </a>
        </li>
        <li className="navaItem">
          <a  className="navaText">
            Portofolio
          </a>
        </li>
        <li className="navaItem">
          <a className="navaText">
            CV
          </a>
        </li>
      </ul>
    {/* </nav> */}
    </div>
  )
}

export default NavBar;