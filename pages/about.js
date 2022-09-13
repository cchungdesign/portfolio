import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "/components/layout.js";
import styles from "/components/home.module.css";

// import me from "/public/me.jpg";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>About</title>
        </Head>

        <div className={styles.about}>
          <p>Hi, I'm Chris.</p>
          <p>
            I'm curating aesthetics and creating new forms through design. I
            love working with my senses—photography, music production, dance,
            and digital painting. I find ways to express my imagination through
            projects with visuals and music.
          </p>
          <p>
            I'm from Las Vegas, NV, where I freelanced in graphic design prior
            to studying Cognitive Science at Pomona College in Claremont, CA. I
            found my space in visual aesthetics, happily exploring my
            surroundings in a search for inspiration in the smallest spaces—from
            corner cafes to neighborhood trails. I want to use design to share
            this happiness in the little details throughout my community.
          </p>
          <p>
            Always open to talking about that obscure genre of music you found
            or your next big vision. Contact me at:
          </p>
          <br />
          <br />
          <span>
            &#8594;{" "}
            <a href="mailto: cchungdesign@gmail.com"> cchungdesign@gmail.com</a>
          </span>
          <br />
          <span>
            &#8594;{" "}
            <a href="https://www.linkedin.com/in/cchungdesign/"> LinkedIn</a>
          </span>
        </div>
        <br />
        <br />
        <p>
          P.S. I built this website using React and Next.js to share my creative
          projects {":)"}
        </p>
      </div>
      {/* <div className={styles.aboutimage}>
        <Image src={me} />
      </div> */}
    </Layout>
  );
}
