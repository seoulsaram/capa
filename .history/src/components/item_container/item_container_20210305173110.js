import React from "react";
import Filter from "../filter/filter";
import RequestBox from "../request_box/request_box";
import styles from "./item_container.module.css";

const ItemContainer = (props) => (
  <section className={styles.section}>
    <h2>들어온 요청</h2>
    <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
    <Filter />
    <RequestBox />
  </section>
);

export default ItemContainer;
