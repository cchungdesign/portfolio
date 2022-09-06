import React from 'react'
import styles from './links.module.css'
import Link from 'next/link';

export default function Links() {
  return (
  <div className={styles.container}>
    <Link href="#projects"><a>&rarr; Work</a></Link>
    <Link href="/digital-media"><a>&#8594; Digital Media</a></Link>
    <Link href="/photography/work"><a>&#8594; Photography</a></Link>
    <Link href="/illustration"><a>&#8594; Illustration</a></Link>
  </div>
  )
}
