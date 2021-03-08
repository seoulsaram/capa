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

    if (key === "method") {
      setFiltered(newFiltered);
    } else if (key === "material") {
      setFiltered(newFiltered);
    }
    //showFilteredRes(filtered);
    console.log(filtered);
  };

  const showFilteredRes = (filter) => {};

  //filter.method.indexOf(info.method) !== -1 || filter.material.indexOf(info.material) !== -1

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
