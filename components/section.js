import React from "react";
import Image from "next/image";
import styles from "./projectpage.module.css";

export default function Section(props) {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div>
          {props.content}
        </div>
      </div>
      <hr />
    </div>
  );
}
