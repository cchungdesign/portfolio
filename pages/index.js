import Head from "next/head";
import Image from "next/image";
import styles from "../components/home.module.css";
import Layout from "../components/layout.js";
import Project from "../components/project.js";

import m3 from "../public/ux/m3/2-mockup.png";
import juniper from "../public/ux/juniper/1-main.jpeg";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Chris Chung</title>
        <meta name="description" content="UX Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.description}>
          <b>Chris Chung</b> is creating experiences for people. They are pursuing
          Cognitive Science at{" "}
          <a href="https://www.pomona.edu/">Pomona College</a>. Currently
          designing at{" "}
          <a href="https://www.juniper.net/us/en.html">Juniper Networks</a>.
        </div>

        <div className={styles.projects}>
          <Project
            company="Juniper Networks"
            year="2022"
            name="Mist AI Live View"
            description="Designing an automated solution to save time and increase accuracy for location services administrators."
            role="UI/UX Design, User Research, Copywriting, Prototyping"
            img={juniper}
            imgalt="Juniper Networks Internship"
          />

          <Project
            company="M^3"
            year="2021"
            name="Virtual Try-On"
            description="Designing a mask sizer to help provide custom-fit masks to underserved and marginalized communities."
            role="UI/UX Design, Brand Identity, Creative Direction, AI"
            img={m3}
            imgalt="M^3 Internship"
            link="/ux-m3"
          />
        </div>
      </main>
    </Layout>
  );
}
