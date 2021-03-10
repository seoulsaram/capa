import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(() => (
  <div className={styles.header}>
    <div className={styles.headerLeft}>
      <div className={styles.burger}>
        <i className="fas fa-bars"></i>
      </div>
      <p>CAPA</p>
      <p>파트너스</p>
    </div>
    <div className={styles.headerRight}>
      <p>A가공업체</p>
      <div className={styles.line}></div>
      <p>로그아웃</p>
    </div>
  </div>
));

export default Header;
