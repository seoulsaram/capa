import React, { useEffect, useState } from "react";
import styles from "./request_box.module.css";

const RequestBox = ({ reqInfo }) => {
  return (
    <article key={reqInfo.id} className={styles.cards}>
      {reqInfo &&
        reqInfo.map((info) => {
          <h1>{reqInfo.title}</h1>;
        })}
    </article>
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
