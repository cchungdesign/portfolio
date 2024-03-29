import React from "react";
import Image from "next/image";
import styles from "./projectpage.module.css";

export default function ImgCaption(props) {
  return (
    <div>
      <div className={styles.imgcaption}>
        <Image src={props.img} />
        <div className={styles.caption}>{props.caption}</div>
      </div>
    </div>
  );
}
