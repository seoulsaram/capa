import React from "react";
import styles from "./filter.module.css";

const Filter = ({ reqInfo }) => {
  const method = ["밀링", "선반"];
  const material = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

  return (
    <section className={styles.section}>
      {/* 가공방식 */}
      {/* 1. 값이 든 배열 만들기
      2. 온클릭 이벤트를 만들기
      3. 이벤트에 두 가지 값을 동시에 필터링하는 로직 넣기 */}
      <div className={styles.filterContainer}>
        <button className={styles.filterBtn}>
          가공방식<i className="fas fa-sort-down"></i>
        </button>

        {/* 재료 */}
        <button className={styles.filterBtn}>
          재료<i className="fas fa-sort-down"></i>
        </button>

        <div className={styles.reset}>
          <i className="fas fa-redo-alt"></i>필터링 리셋
        </div>
      </div>

      <div className={styles.filter}>
        {method.map((methods) => (
          <label htmlFor={methods} key={methods}>
            <input type="checkbox" name={methods} value={methods} />
            {methods}
          </label>
        ))}
      </div>

      <div className={styles.filter}>
        {material.map((materials) => (
          <label htmlFor={materials} key={materials}>
            <input type="checkbox" name={materials} value={materials} />
            {materials}
          </label>
        ))}
      </div>

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
