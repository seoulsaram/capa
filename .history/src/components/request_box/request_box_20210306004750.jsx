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
              {info.status === "상담중" && <div className={styles.status}>{info.status}</div>}
            </div>
            <p>{info.client}</p>
            <p>{info.due}까지 납기</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.bottom}>
            <div className={styles.order}>
              <p className={styles.orderTitle}>도면개수</p>
              <p className={styles.orderBold}>{info.count}</p>
            </div>
            <div className={styles.order}>
              <p className={styles.orderTitle}>총 수량</p>
              <p className={styles.orderBold}>{info.amount}개</p>
            </div>
            <div className={styles.order}>
              가공방식<p className={styles.orderBold}>{info.method.join(",")}</p>
            </div>
            <div className={styles.order}>
              재료<p className={styles.orderBold}>{info.material.join(",")}</p>
            </div>
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