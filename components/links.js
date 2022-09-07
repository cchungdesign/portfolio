import React from 'react'
import styles from './links.module.css'
import Link from 'next/link';

export default function Links() {
  return (
  <div className={styles.container}>
    <Link href="/#work"><a>&rarr; Work</a></Link>
    <Link href="/digital-media"><a>&#8594; Digital Media</a></Link>
    <a href="https://cchung.myportfolio.com/photography" target="_blank">&#8594; Photography</a>
    <a href="https://cchung.myportfolio.com/illustration" target="_blank">&#8594; Illustration</a>
    {/* <Link href="/photography"><a>&#8594; Photography</a></Link>
    <Link href="/illustration"><a>&#8594; Illustration</a></Link> */}
  </div>
  )
}
