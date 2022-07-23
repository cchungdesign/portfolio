import React from 'react'
import styles from './header.module.css'
import Link from 'next/link';

export default function Header() {
  return (
  <header className={styles.header}>
    <div className={styles.logo}>Chris Chung</div>
    <div className={styles.navbar}>
      {/* <Link className={styles.currentpage} href="/design">Design</Link> */}
      {/* <Link href="/illustration">Illustration</Link>
      <Link href="/photography">Photography</Link> */}
      <Link href="/about">
        <a>About</a>
      </Link>
      {/* <Link href="/resume">Resume</Link> */}
    </div>
  </header>
  )
}
