import React, { useState } from "react";
import styles from "./filter.module.css";

// const Filter = ({ reqInfo, handleFilter }) => {
//   const [isChecked, setIsChecked] = useState([]);

//   const method = ["밀링", "선반"];
//   const material = ["알루미늄", "탄소강", "구리", "합금강", "강철"];
//   //console.log(material.indexOf("알루미늄"));

//   const handleToggle = (value) => {
//     const currentIndex = isChecked.indexOf(`${value}`);
//     const newChecked = [...isChecked];
//     console.log('"' + value + '"');
//     console.log(`currentIndex: ${currentIndex}`);
//     if (currentIndex !== -1) {
//       newChecked.slice(currentIndex, 1);
//     } else {
//       newChecked.push(value);
//     }
//     setIsChecked(newChecked);
//     //handleFilter(newChecked);
//   };
//   console.log(isChecked);

//   return (
//     <section className={styles.section}>
//       {/* 가공방식 */}
//       {/* 1. 값이 든 배열 만들기
//       2. 온클릭 이벤트를 만들기
//       3. 이벤트에 두 가지 값을 동시에 필터링하는 로직 넣기
//       4. checked 주기
//       5. 선택된 필터 카운트해서 버튼에 갯수 보여주기
//       온클릭이벤트로 : 체크드 속성 주고 토글로 해서 아래 필터메뉴 보이기
//       */}
//       <div className={styles.filterContainer}>
//         <button className={styles.filterBtn}>
//           가공방식<p className={styles.down}>▾</p>
//         </button>

//         {/* 재료 */}
//         <button className={styles.filterBtn}>
//           재료<p className={styles.down}>▾</p>
//         </button>

//         <div className={styles.reset}>
//           <i className="fas fa-redo-alt"></i>필터링 리셋
//         </div>
//       </div>

//       <div className={styles.filter}>
//         {method.map((methods) => (
//           <label htmlFor={methods} key={methods}>
//             <input type="checkbox" name={methods} value={methods} />
//             {methods}
//           </label>
//         ))}
//       </div>

//       <div className={styles.filter}>
//         {material.map((materials) => (
//           <label htmlFor={materials} key={materials}>
//             <input
//               type="checkbox"
//               name={materials}
//               value={materials}
//               onChange={(e) => handleToggle(e.currentTarget.value)}
//             />
//             {materials}
//           </label>
//         ))}
//       </div>

//       <div></div>
//     </section>
//   );
// };

// export default Filter;

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

const Filter = ({ reqInfo }) => {
  const [isChecked, setIsChecked] = useState([]);

  const strings = ["hi", "yello", "good"];

  const handleToggle = (value) => {
    const currentIndex = isChecked.indexOf(`"${value}`);
    const newChecked = [...isChecked];
    console.log(value);
    console.log(currentIndex);
    if (currentIndex !== -1) {
      newChecked.slice(currentIndex, 1);
    } else {
      newChecked.push(value);
    }
    setIsChecked(newChecked);
  };

  return (
    <div className={styles.filter}>
      {strings.map((strings) => (
        <label htmlFor={strings} key={strings}>
          <input
            type="checkbox"
            name={strings}
            value={strings}
            onChange={(e) => handleToggle(e.currentTarget.value)}
          />
          {strings}
        </label>
      ))}
    </div>
  );
};

export default Filter;
