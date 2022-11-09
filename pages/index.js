import Head from "next/head";
import Image from "next/image";
import styles from "/components/home.module.css";
import Layout from "/components/layout.js";
import Project from "/components/project.js";
import Links from "/components/links.js";

import mcubed from "/public/work/mcubed/2-mockup.png";
import juniper from "/public/work/juniper/cover.png";
import harpie from "/public/work/harpie/coverblue.png";
import bg from "/public/gradient.png";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Chris Chung</title>
        <meta name="description" content="UX Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.description}>
            <b>Chris Chung</b> is creating{" "}
            <text className={styles.highlight}>art through experiences.</text>{" "}
            Pursuing{" "}
            <a href="https://www.pomona.edu/academics/majors/cognitive-science">
              Cognitive Science
            </a>{" "}
            at <a href="https://www.pomona.edu/">Pomona College</a>.
            {/* Currently designing at{" "}
            <a href="https://www.juniper.net/us/en.html">Juniper Networks</a>. */}
          </div>
          <Links />
        </div>

        <div className={styles.bgwrapper}>
          <div className={styles.bg}>
            <Image
              src={bg}
              className={styles.animate}
              width="560px"
              height="560px"
              layout="fixed"
            />
          </div>
        </div>

        <div id="work" className={styles.projects}>
          <Project
            company="Juniper Networks"
            year="2022"
            name="Mist AI Auto Placement & Orientation"
            description="Designing an automated solution to save time and increase accuracy for location services administrators."
            role="UI/UX Design, User Research, Copywriting, Prototyping"
            img={<Image src={juniper} />}
            imgalt="Mist AI Auto Placement & Orientation"
            link="/work/juniper"
          />

          <Project
            company="M^3"
            year="2021"
            name="Virtual Try-On"
            description="Designing a mask sizer to help provide custom-fit masks to underserved and marginalized communities."
            role="UI/UX Design, Brand Identity, Creative Direction, AI"
            img={<Image src={mcubed} />}
            imgalt="Virtual Try-On"
            link="/work/mcubed"
          />

          <Project
            company="Harpie"
            year="2021"
            name="Harpie Branding"
            description="Redesigning the Harpie identity."
            role="Brand Identity, Creative Direction, Graphic Design"
            img={<Image src={harpie} />}
            imgalt="Harpie Branding"
            link="/work/harpie"
          />
        </div>
      </main>
    </Layout>
  );
}
