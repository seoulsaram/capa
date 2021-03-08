import React, { useEffect, useState } from "react";
import Filter from "../filter/filter";
import RequestBox from "../request_box/request_box";
import styles from "./item_container.module.css";

const ItemContainer = ({ requestInfo }) => {
  const [reqInfo, setReqInfo] = useState([]);
  const [filtered, setFiltered] = useState({ method: [], material: [] });
  //console.log(reqInfo.map((info) => info["material"].filter((fill) => fill === "알루미늄")));

  //   const fill = reqInfo.map((info) => info["material"].filter((fill) => fill === "알루미늄"));
  //   console.log(fill);
  //     for (let i = 0; i < fill.length; i++) {
  //       if (fill[i].length !== 0) {
  //         setReqInfo(reqInfo[fill[i]]);
  //       }
  //     }
  //   console.log(reqInfo);

  useEffect(() => {
    requestInfo.getInfo().then((info) => setReqInfo(info));
  }, [requestInfo]);

  const handleFilter = (filter, key) => {
    const newFiltered = { ...filtered };
    newFiltered[key] = filter;
    setFiltered(newFiltered);

    // if (key === "method") {
    //   const filterMap = reqInfo.filter((info) => info[key] === filtered[key]);
    //   console.log(filterMap);
    // } else if (key === "material") {
    //   setReqInfo[key](filtered);
    // }
    showFilteredRes(filtered);
  };

  const showFilteredRes = (filtered) => {
    console.log(reqInfo[0].method);
    console.log(filtered.method.indexOf(reqInfo["method"] === filtered.method));
    const filteredRes = Array.from(reqInfo).filter((info) => {
      return filtered.method.indexOf(info["method"]) !== -1;
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
