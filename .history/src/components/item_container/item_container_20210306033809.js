import React, { useEffect, useState } from "react";
import Filter from "../filter/filter";
import RequestBox from "../request_box/request_box";
import styles from "./item_container.module.css";

const ItemContainer = ({ requestInfo }) => {
  const [reqInfo, setReqInfo] = useState([]);

  useEffect(() => {
    requestInfo.getInfo().then((info) => setReqInfo(info));
  }, [requestInfo]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>들어온 요청</h2>
      <p className={styles.desc}>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <Filter reqInfo={reqInfo} />
      {reqInfo.map((info) => (
        <ul className={styles.cards}>
          <RequestBox reqInfo={info} />
        </ul>
      ))}
    </section>
  );
};

export default ItemContainer;
