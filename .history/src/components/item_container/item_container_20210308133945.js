import React, { useEffect, useState } from "react";
import Filter from "../filter/filter";
import RequestBox from "../request_box/request_box";
import styles from "./item_container.module.css";

const ItemContainer = ({ requestInfo }) => {
  const [reqInfo, setReqInfo] = useState([]);
  const [filtered, setFiltered] = useState({ method: [], material: [] });

  useEffect(() => {
    requestInfo.getInfo().then((info) => setReqInfo(info));
  }, [requestInfo]);

  const handleFilter = (filter, key) => {
    const newFiltered = { ...filtered };
    newFiltered[key] = filter;
    console.log(newFiltered);
    setFiltered(newFiltered);

    showFilteredRes(newFiltered);
  };

  const showFilteredRes = (filtered) => {
    const filteredRes = Array.from(reqInfo).filter((info) => {
      return filtered.method.indexOf(info["method"] === filtered.method) !== -1;
    });
    setReqInfo(filteredRes);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>들어온 요청</h2>
      <p className={styles.desc}>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <Filter reqInfo={reqInfo} handleFilter={handleFilter} />

      <ul className={styles.cards}>
        {reqInfo.map((info) => (
          <RequestBox reqInfo={info} key={info.id} />
        ))}
      </ul>
    </section>
  );
};

export default ItemContainer;
