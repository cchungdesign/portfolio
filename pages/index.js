import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/home.module.css'
import Layout from '../components/layout.js';
import Project from '../components/project.js'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Chris Chung</title>
        <meta name="description" content="UX Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm Chris.
        </h1>

        <p className={styles.description}>
          I’m creating experiences for people. Pursuing Cognitive Science at <a href="https://www.pomona.edu/">Pomona College</a>. Currently designing at <a href="https://www.juniper.net/us/en.html">Juniper Networks</a>. ✨
        </p>

        <div className={styles.projects}>

        <Project 
        company="Juniper Networks"
        year="2022"
        name="Mist AI Live View"
        description="Designing a solution for Juniper Network's Mist AI to set the rotation of access points automatically, saving time and increasing accuracy for location services administrators."
        role="UI/UX Design, User Research, Copywriting, Prototyping"
        img="/../public/ux/juniper/1-main.jpeg"
        imgalt="Juniper Networks Internship"
        />

        <Project 
        company="M^3"
        year="2021"
        name="Virtual Try-On"
        description="Designing a mask sizer to help provide custom-fit masks to underserved and marginalized communities."
        role="UI/UX Design, Brand Identity, Creative Direction, AI"
        img="/../public/ux/m3/1-main.png"
        imgalt="M^3 Internship"
        />
        </div>
      </main>
    </Layout>
  )
}
