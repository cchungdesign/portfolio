import React from 'react'
import styles from './header.module.css'
import Link from 'next/link';

export default function Header() {
  return (
  <div className={styles.container}>
      <header className={styles.header}>
    <Link href="/" className={styles.logo}>Chris Chung</Link>
    <div className={styles.navbar}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="https://drive.google.com/file/d/17Gn0GANTZpYpMOqCOBjpXlWLzb-pL0Sq/view?usp=sharing">
        <a>Resume</a>
      </Link>
    </div>
  </header>
  </div>
  )
}
