import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(
  <header className={styles.header}>
    <div className={styles.headerLeft}>
      <p>CAPA</p>
      <p>파트너스</p>
    </div>
    <div className={styles.headerRight}>
      <p>A가공업체</p>
      <div className={styles.line}></div>
      <p>로그아웃</p>
    </div>
  </header>
);

export default Header;
