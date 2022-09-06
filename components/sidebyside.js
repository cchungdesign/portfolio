import React from "react";
import Image from "next/image";
import styles from "./projectpage.module.css";

export default function SideBySide(props) {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.sidebyside}>
          <div className={styles.sbsleft}>
            <h2>{props.title}</h2>
            {props.content}
          </div>
          <div className={styles.sbsright}>
            {props.images}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
