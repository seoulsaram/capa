import React from "react";
import styles from "./request_box.module.css";

const RequestBox = ({ reqInfo }) => {
  return (
    <ul className={styles.cards}>
      <div key={reqInfo.id} className={styles.card}>
        <div className={styles.top}>
          <div className={styles.titleContainer}>
            <h2>{reqInfo.title}</h2>
            {reqInfo.status === "상담중" && <div className={styles.status}>{reqInfo.status}</div>}
          </div>
          <p className={styles.client}>{reqInfo.client}</p>
          <p className={styles.due}>{reqInfo.due}까지 납기</p>
        </div>
        <div className={styles.line}></div>
        {/* 테이블 로만들기 */}
        <table className={styles.bottom}>
          <tbody className={styles.order}>
            <tr>
              <td className={styles.orderTitle}>도면갯수</td>
              <td className={styles.orderBold}>{reqInfo.count}</td>
            </tr>
            <tr>
              <td className={styles.orderTitle}>총 수량</td>
              <td className={styles.orderBold}>{reqInfo.amount}개</td>
            </tr>
            <tr>
              <td className={styles.orderTitle}>가공방식</td>
              <td className={styles.orderBold}>{reqInfo.method.join(",")}</td>
            </tr>
            <tr>
              <td className={styles.orderTitle}>재료</td>
              <td className={styles.orderBold}>{reqInfo.material.join(",")}</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.btnContainer}>
          <button className={styles.reqBtn}>요청 내역 보기</button>
          <button className={styles.chatBtn}>채팅하기</button>
        </div>
      </div>
      ))
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
