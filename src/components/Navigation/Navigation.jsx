import styles from "./Navigation.module.css";
import React from "react";

const Navigation = () => {
  console.log(Navigation);
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img
          src="https://i.postimg.cc/bwXvnGzx/White-and-Purple-Gaming-Avatar-Logo-1.png"
          alt="logo"
          width={100}
        />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <div className="bar">
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
