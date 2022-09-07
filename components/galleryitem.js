import React from "react";
import Image from "next/image";
import styles from "./galleryitem.module.css";

export default function GalleryItem(props) {
  return (
    <div className={styles.container} id={props.id}>
      <div className={styles.text}>
        <div className={styles.heading}>
          {props.title}, {props.year}
        </div>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div className={styles.images}>
        {props.images.map((index) => (
          <div className={styles.image}>
            <Image src={index.src} height={index.height} width={index.width} layout="responsive" />
          </div>
        ))}
      </div>
    </div>
  );
}
