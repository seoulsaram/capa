import React from "react";
import styles from "./request_box.module.css";

const RequestBox = ({ reqInfo }) => {
  return (
    <ul className={styles.cards}>
      {reqInfo.map((info) => (
        <div key={info.id} className={styles.card}>
          <div className={styles.top}>
            <div className={styles.titleContainer}>
              <h2>{info.title}</h2>
              {info.status === "상담중" && <div>하이</div>}
            </div>

            <p>{info.client}</p>
            <p>{info.due}까지 납기</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.bottom}>
            도면개수<b>{info.count}</b>총 수량<b>{info.amount}개</b>
            가공방식<b>{info.method.join(",")}</b>
            재료<b>{info.material.join(",")}</b>
          </div>
          <div className={styles.btnContainer}>
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
