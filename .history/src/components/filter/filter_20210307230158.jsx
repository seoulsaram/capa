import React, { useState } from "react";
import styles from "./filter.module.css";

const Filter = ({ reqInfo, handleFilter }) => {
  const [checkedMethods, setCheckedMethods] = useState([]);
  const [checkedMaterials, setCheckedMaterials] = useState([]);

  const method = ["밀링", "선반"];
  const material = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

  const handleMethods = (value) => {
    const currentIndex = checkedMethods.indexOf(value);
    const newChecked = [...checkedMethods];
    console.log(`currentIndex: ${currentIndex}`);
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedMethods(newChecked);
    handleFilter(newChecked, "method");
  };
  console.log(checkedMethods);

  const handleMaterials = (value) => {
    const currentIndex = checkedMaterials.indexOf(value);
    const newChecked = [...checkedMaterials];
    console.log(`currentIndex: ${currentIndex}`);
    if (currentIndex === -1) {
      newChecked.push(value);
      console.log(newChecked);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedMaterials(newChecked);
    handleFilter(newChecked, "material");
  };
  console.log(checkedMaterials);

  const resetFilters = () => {
    setCheckedMaterials(0);
    setCheckedMethods(0);
  };

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
      */}
      <div className={styles.filterContainer}>
        <button className={styles.filterBtn}>
          가공방식{checkedMethods.length > 0 && <p>({checkedMethods.length})</p>}
          <p className={styles.down}>▾</p>
        </button>

        {/* 재료 */}
        <button className={styles.filterBtn}>
          재료{checkedMaterials.length > 0 && <p>({checkedMaterials.length})</p>}
          <p className={styles.down}>▾</p>
        </button>
        {(checkedMethods.length > 0 || checkedMaterials.length > 0) && (
          <div className={styles.reset} onClick={resetFilters}>
            <i className="fas fa-redo-alt"></i>필터링 리셋
          </div>
        )}
      </div>

      <div className={styles.filter}>
        {method.map((methods) => (
          <label htmlFor={methods} key={methods}>
            <input
              type="checkbox"
              name={methods}
              value={methods}
              onChange={(e) => handleMethods(e.currentTarget.value)}
            />
            {methods}
          </label>
        ))}
      </div>

      <div className={styles.filter}>
        {material.map((materials) => (
          <label htmlFor={materials} key={materials}>
            <input
              type="checkbox"
              name={materials}
              value={materials}
              onChange={(e) => handleMaterials(e.currentTarget.value)}
            />
            {materials}
          </label>
        ))}
      </div>

      <div></div>
    </section>
  );
};

export default Filter;
