import React, { useEffect, useState } from "react";
import styles from "./request_box.module.css";

const RequestBox = ({ reqInfo }) => {
  return (
    <ul className={styles.cards}>
      {reqInfo.map((info) => (
        <div key={info.id}>
          <h2>{info.title}</h2>
          <p>{info.client}</p>
          <p>{info.due}까지 납기</p>
          <div className={styles.line}></div>
          <p>
            도면개수<b>{info.count}</b>
          </p>
          <p>
            총 수량<b>{info.amount}개</b>
          </p>
          <p>
            가공방식<b>{info.method}</b>
          </p>
          <p>
            재료<b>{info.material}</b>
          </p>
          <div className={styles.btnContainer}>
            {" "}
            <button>요청 내역 보기</button>
            <button>채팅하기</button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default RequestBox;

// {
//     "id": 1,
//     "title": "자동차 시제품 제작",
//     "client": "A 고객사",
//     "due": "2020.12.14",
//     "count": 2,
//     "amount": 100,
//     "method": ["밀링", "선반"],
//     "material": ["알루미늄"],
//     "status": "대기중"
//   },