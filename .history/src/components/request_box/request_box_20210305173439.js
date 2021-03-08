import React, { useEffect, useState } from "react";
import styles from "./request_box.module.css";

const RequestBox = ({ requestInfo }) => {
  const [reqInfo, setReqInfo] = useState([]);

  useEffect(() => {
    requestInfo.getInfo().then(console.log);
  }, []);

  return <article className={styles.cards}></article>;
};

export default RequestBox;
