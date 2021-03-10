import React, { useEffect, useState } from "react";
import Filter from "../filter/filter";
import RequestBox from "../request_box/request_box";
import styles from "./item_container.module.css";

const ItemContainer = ({ requestInfo }) => {
  const [reqInfo, setReqInfo] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData();
  }, [requestInfo]);

  const getData = () => {
    requestInfo
      .getInfo()
      .then((info) => setReqInfo(info))
      .catch(alert);
  };

  const handleFilter = (filter, key, check) => {
    const newFiltered = { ...filtered };
    filter.forEach((filters) => {
      newFiltered[key] = filters[key];
    });

    setFiltered(newFiltered);
    showFilteredRes(newFiltered, key, check);
  };

  const showFilteredRes = (filtered, key) => {
    requestInfo.getSearchRes(filtered, key).then((info) => {
      if (filtered[key].length < 0) {
        getData();
      } else {
        setReqInfo(info);
      }
    });
  };

  const reset = () => {
    getData();
  };

  //수정 필요

  const filterConsult = () => {
    if (count % 2 === 0) {
      const filteredConsult = reqInfo.filter((info) => {
        return info["status"] === "상담중";
      });
      setReqInfo(filteredConsult);
    } else {
      getData();
    }
    setCount(count + 1);
  };

  return (
    //   검색결과가 없을 시의 화면 만들기
    <section className={styles.section}>
      <h2 className={styles.title}>들어온 요청</h2>
      <p className={styles.desc}>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <Filter
        reqInfo={reqInfo}
        handleFilter={handleFilter}
        reset={reset}
        filterConsult={filterConsult}
      />
      <ul className={styles.cards}>
        {reqInfo.map((info) => (
          <RequestBox reqInfo={info} key={info.id} />
        ))}
      </ul>
      ;
    </section>
  );
};

export default ItemContainer;
