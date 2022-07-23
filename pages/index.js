import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/header.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Chung</title>
        <meta name="description" content="UX Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm Chris.
        </h1>

        <p className={styles.description}>
          I’m creating experiences for people. Pursuing Cognitive Science at <a href="https://www.pomona.edu/">Pomona College</a>. Currently designing at <a href="https://www.juniper.net/us/en.html">Juniper Networks</a>. ✨
        </p>

        <div className={styles.projects}>
          <div className={styles.project}> 
            <div className={styles.projectdesc}>
              <p>Juniper Networks<br/><text className={styles.subtext}>2022</text></p>
              <h2>Mist AI Live View</h2>
              
              <p>Designing a solution for Juniper Network's Mist AI to set the rotation of access points automatically, saving time and increasing accuracy for location services administrators.</p>
              <p className={styles.subtext}><b>Role:</b> UI/UX Design, User Research, Copywriting, Prototyping</p>
              
              <p><a href="">Read more {'->'}</a></p>
            </div>
            <Image className={styles.img} src="/ux/juniper/1-main.jpeg" alt="Juniper Networks Internship" width="400" height="300"/>
          </div>

          <div className={styles.project}>
            <div className={styles.projectdesc}>
              <p>M^3<br/><text className={styles.subtext}>2021</text></p>
              <h2>Virtual Try-On</h2>
              
              <p>Designing a mask sizer to help provide custom-fit masks to underserved and marginalized communities.</p>
              <p className={styles.subtext}><b>Role:</b> UI/UX Design, Brand Identity, Creative Direction, AI</p>
              
              <p><a href="">Read more {'->'}</a></p>
            </div>
            <Image src="/ux/m3/1-main.png" alt="M^3 Internship" width="400" height="300"/>
          </div>
        </div>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
