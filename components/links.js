import React from "react";
import styles from "./links.module.css";
import Link from "next/link";

export default function Links() {
  return (
    <div className={styles.container}>
      <span>
        &#8594;{" "}
        <Link href="/#work">
          <a>Work</a>
        </Link>
      </span>
      <span>
        &#8594;{" "}
        <Link href="/digital-media">
          <a>Digital Media</a>
        </Link>
      </span>
      {/* <span>&#8594; <Link href="https://cchung.myportfolio.com/photography"><a>Photography</a></Link></span>
    <span>&#8594; <Link href="https://cchung.myportfolio.com/illustration"><a>Illustration</a></Link></span> */}
      <span>
        &#8594;{" "}
        <Link href="https://chrischung.net/">
          <a>Art (chrischung.net)</a>
        </Link>
      </span>
    </div>
  );
}
