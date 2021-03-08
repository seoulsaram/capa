import React, { useEffect, useState } from "react";
import Filter from "../filter/filter";
import RequestBox from "../request_box/request_box";
import styles from "./item_container.module.css";

const ItemContainer = ({ requestInfo }) => {
  const [reqInfo, setReqInfo] = useState([]);

  useEffect(() => {
    const stopSync = requestInfo.getInfo((res) => {
      setReqInfo(res);
    });
    return stopSync();
  }, [requestInfo]);
  console.log(`reqInfo: ${reqInfo[0]}`);

  return (
    <section className={styles.section}>
      <h2>들어온 요청</h2>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <Filter requestInfo={requestInfo} />
      <RequestBox requestInfo={requestInfo} />
    </section>
  );
};

export default ItemContainer;
