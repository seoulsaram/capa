import React from "react";
import styles from "./filter.module.css";

const Filter = ({ reqInfo }) => {
  return (
    <section className={styles.section}>
      {/* 가공방식 */}
      <div className={styles.filter}>
        <div>
          {reqInfo.map((num) => (
            <input type="checkbox" value={num.method} key={num.id} />
          ))}
          {console.log(reqInfo.method)}
        </div>
      </div>
      {/* 재료 */}
      <div className={styles.filter}></div>
      <div></div>
      <div></div>
    </section>
  );
};

export default Filter;

// "requests": [
//     {
//       "id": 1,
//       "title": "자동차 시제품 제작",
//       "client": "A 고객사",
//       "due": "2020.12.14",
//       "count": 2,
//       "amount": 100,
//       "method": ["밀링", "선반"],
//       "material": ["알루미늄"],
//       "status": "대기중"
//     },
