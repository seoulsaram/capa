import React, { useState } from "react";
import Checkbox from "./checkbox/checkbox";
import styles from "./filter.module.css";

const Filter = ({ reqInfo, handleFilter }) => {
  const [checked, setChecked] = useState([
    {
      method: [],
      material: [],
    },
  ]);

  const values = [
    {
      method: ["밀링", "선반"],
      material: ["알루미늄", "탄소강", "구리", "합금강", "강철"],
    },
  ];

  const handleToggle = (value, key) => {
    const currentIndex = checked[0][key].indexOf(value);
    const newChecked = [...checked];

    newChecked.forEach((newChecked) => {
      if (currentIndex === -1) {
        newChecked[key].push(value);
      } else {
        newChecked[key].splice(currentIndex, 1);
      }
    });
    setChecked(newChecked);
    handleFilter(newChecked, key);
  };

  const resetFilters = () => {};

  return (
    <section className={styles.section}>
      {/* 가공방식 */}
      {/* 1. 값이 든 배열 만들기(done)
      2. 온클릭 이벤트를 만들기(done)
      3. 이벤트에 두 가지 값을 동시에 필터링하는 로직 넣기
      4. checked 주기(done)
      5. 선택된 필터 카운트해서 버튼에 갯수 보여주기(done)
      6.온클릭이벤트로 : 체크드 속성 주고 토글로 해서 아래 필터메뉴 보이기
      7. 리셋필터 기능 넣기
      8. 상담중만 필터하는 기능 넣기
      9.클릭된 버튼 파란바탕으로
      */}
      <div className={styles.filterContainer}>
        <button className={styles.filterBtn}>
          가공방식{checked[0].method.length > 0 && <p>({checked[0].method.length})</p>}
          <p className={styles.down}>▾</p>
        </button>

        {/* 재료 */}
        <button className={styles.filterBtn}>
          재료{checked[0].material.length > 0 && <p>({checked[0].material.length})</p>}
          <p className={styles.down}>▾</p>
        </button>
        {(checked[0].method.length > 0 || checked[0].material.length > 0) && (
          <div className={styles.reset} onClick={resetFilters}>
            <i className="fas fa-redo-alt"></i>필터링 리셋
          </div>
        )}
      </div>

      <div className={styles.filter}>
        {values.map((value) => {
          return value.method.map((each, index) => {
            return <Checkbox values={each} onClick={handleToggle} key={index} keyName="method" />;
          });
        })}
      </div>

      <div className={styles.filter}>
        {values.map((value) => {
          return value.material.map((each, index) => {
            return <Checkbox values={each} onClick={handleToggle} key={index} keyName="material" />;
          });
        })}
      </div>

      <div></div>
    </section>
  );
};

export default Filter;
