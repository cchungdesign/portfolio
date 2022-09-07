import Head from "next/head";
import Image from "next/image";
import styles from "/components/projectpage.module.css";
import Layout from "/components/layout.js";
import Section from "/components/section.js";
import SideBySide from "/components/sidebyside.js";
import ImgCaption from "/components/imgcaption.js";

import cover from "/public/work/harpie/coverblue.png";
import description from "/public/work/harpie/description.png";
import logowhite from "/public/work/harpie/logowhite.png";
import logomain from "/public/work/harpie/logomain.png";
import logobw from "/public/work/harpie/logobw.png";
import palette from "/public/work/harpie/palette.png";
import fonts from "/public/work/harpie/fonts.png";
import examples from "/public/work/harpie/examples.png";

export default function About() {
  return (
    <Layout>
      <div className={styles.hero}>
        <Image src={cover} />
      </div>

      <div className={styles.container}>
        <Image src={description} />
        <Image src={logowhite} />
        <Image src={logomain} />
        <Image src={logobw} />
        <Image src={palette} />
        <Image src={fonts} />
        <Image src={examples} />
      </div>
    </Layout>
  );
}
