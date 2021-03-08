import React from "react";
import styles from "./filter.module.css";

const Filter = ({ reqInfo }) => {
  return (
    <section className={styles.section}>
      {/* 가공방식 */}
      {/* 1. 값이 든 배열 만들기
      2. 온클릭 이벤트를 만들기
      3. 이벤트에 두 가지 값을 동시에 필터링하는 로직 넣기 */}
      <div className={styles.filter}>
        <div>
          <label>
            <input type="checkbox" value="밀링" />
            밀링
          </label>
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
