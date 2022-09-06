import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "/components/layout.js";
import styles from "/components/gallery.module.css";
import Gallery from "/components/gallery.js";

import img1 from "/public/photography/2021-aspc/0ce9c6c8-5dd3-4ccd-8a81-b37bc37b54fc_rw_3840.jpeg";
import img2 from "/public/photography/2021-aspc/8c54f710-9851-4a4b-a4ef-69662a7b2c33_rw_3840.jpeg";
import img3 from "/public/photography/2021-aspc/24e36268-b780-4f41-a5d7-e8757ef4a90e_rw_3840.jpeg";
import img4 from "/public/photography/2021-aspc/27d50ba1-22c4-41c4-a2c6-1d443451f4a5_rw_3840.jpeg";

export default function Work() {
  return (
    <Layout>
      <div className={styles.gallery}>
        <div className={styles.item}>
            <Image src={img1}/>
        </div>
        <div className={styles.item}>
            <Image src={img2}/>
        </div>
        <div className={styles.item}>
            <Image src={img3}/>
        </div>
        <div className={styles.item}>
            <Image src={img4}/>
        </div>
        <div className={styles.item}>
            <Image src={img1}/>
        </div>
        <div className={styles.item}>
            <Image src={img2}/>
        </div>
        <div className={styles.item}>
            <Image src={img3}/>
        </div>
        <div className={styles.item}>
            <Image src={img4}/>
        </div>
      </div>
    </Layout>
  );
}
