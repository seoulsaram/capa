import React, { useRef, useState } from "react";
import "./filter.css";

const Filter = ({ handleFilter, reset, filterConsult }) => {
  const btnRef = useRef();
  const btnRef2 = useRef();
  const labelRef = useRef();
  const labelRef2 = useRef();
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
    console.log(newChecked);
    handleFilter(newChecked, key);
  };

  const resetFilters = () => {
    setChecked([
      {
        method: [],
        material: [],
      },
    ]);

    reset();
  };

  const toggleBtn = () => {
    btnRef.current.addEventListener("click", () => {
      labelRef.current.classList.toggle("open");
      btnRef.current.classList.toggle("open");
    });
  };
  const toggleBtn2 = () => {
    btnRef2.current.addEventListener("click", () => {
      labelRef2.current.classList.toggle("open");
      btnRef2.current.classList.toggle("open");
    });
  };

  const countClick = () => {
    let count = 0;
    count += count++;
    filterConsult(count);
    console.log(count);
  };

  return (
    <section className="section">
      {/* 가공방식 */}
      {/* 1. 값이 든 배열 만들기(done)
      3. 이벤트에 두 가지 값을 동시에 필터링하는 로직 넣기
      4. checked 주기(done)
      8. 상담중만 필터하는 기능 넣기
      */}
      <div className="filterBtnContainer">
        <div className="filterItems">
          {/* 가공방식 */}
          <ul className="filterContainer">
            <li>
              <button className="filterBtn" onClick={toggleBtn} ref={btnRef}>
                가공방식{checked[0].method.length > 0 && <p>({checked[0].method.length})</p>}
                <p className="down">▾</p>
              </button>

              <div className="filter" ref={labelRef}>
                {values.map((value) => {
                  return value.method.map((each, index) => {
                    return (
                      <label htmlFor={each} key={index}>
                        <input
                          type="checkbox"
                          name={each}
                          value={each}
                          onChange={(e) => handleToggle(e.currentTarget.value, "method")}
                          checked={checked[0].method.indexOf(each) === -1 ? false : true}
                        />
                        {each}
                      </label>
                    );
                  });
                })}
              </div>
            </li>

            {/* 재료 */}
            <li>
              <button className="filterBtn" onClick={toggleBtn2} ref={btnRef2}>
                재료{checked[0].material.length > 0 && <p>({checked[0].material.length})</p>}
                <p className="down">▾</p>
              </button>
              <div className="filter" ref={labelRef2}>
                {values.map((value) => {
                  return value.material.map((each, index) => {
                    return (
                      <label htmlFor={each} key={index} className="inputLabel">
                        <input
                          type="checkbox"
                          name={each}
                          value={each}
                          onChange={(e) => handleToggle(e.currentTarget.value, "material")}
                          checked={checked[0].material.indexOf(each) === -1 ? false : true}
                        />
                        {each}
                      </label>
                    );
                  });
                })}
              </div>
            </li>
          </ul>

          {(checked[0].method.length > 0 || checked[0].material.length > 0) && (
            <div className="reset" onClick={resetFilters}>
              <i className="fas fa-redo-alt"></i> 필터링 리셋
            </div>
          )}
        </div>

        <div className="filterConsult">
          <input className="resetInput" type="checkbox" id="chk1" />
          <label className="label" htmlFor="chk1" onClick={countClick}></label>
          <p className="consultP">상담중인 요청만 보기</p>
        </div>
      </div>
    </section>
  );
};

export default Filter;
