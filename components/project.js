import React from "react";
import Image from "next/image";
import styles from "./project.module.css";
import Link from "next/link";

export default function Project(props) {
  return (
    <div className={styles.project}>
      <div className={styles.projecttext}>
        <div className={styles.company}>
          <div>
            {props.company} · {props.year}
          </div>
        </div>
        <h2>{props.name}</h2>
        <div className={styles.projectdesc}>
          <p>{props.description}</p>
          <p className={styles.subtext}>
            <b>Role:</b> {props.role}
          </p>
        </div>

        <p>
          <a href={props.link}>Read more {"->"}</a>
        </p>
      </div>
      <a href={props.link} className={styles.projectimg}>
        <Image
          className={styles.img}
          src={props.img}
          alt={props.imgalt}
          width="600"
          height="400"
        />
      </a>
    </div>
  );
}
