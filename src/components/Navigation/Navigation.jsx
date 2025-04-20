import styles from "./Navigation.module.css";
import React from "react";

const Navigation = () => {
  console.log(Navigation);
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img
          src="https://img.icons8.com/?size=200&id=yPt7YdTX5THi&format=png&color=3c3f6c"
          alt="logo"
          width={50}
        />{" "}
        <h2>Contact page</h2>
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
