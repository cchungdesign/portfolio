import React from "react";
import Image from "next/image";
import styles from "./project.module.css";
import Link from "next/link";

export default function Project(props) {
  return (
    <div className={styles.project}>
      <div className={styles.projecttext}>
        <div className={styles.company}>
          {props.company} · {props.year}
        </div>
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.projectdesc}>
          <p>{props.description}</p>
          <p className={styles.role}>
            <b>Role:</b> {props.role}
          </p>
        </div>

        <p className={styles.link}>
          <span>&#8594; <a href={props.link}>Read more</a></span>
        </p>
      </div>
      <a href={props.link} className={styles.projectimg}>
        {props.img}
      </a>
    </div>
  );
}
