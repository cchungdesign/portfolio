import Head from "next/head";
import Image from "next/image";
import styles from "/components/gallery.module.css";
import carousel from "/components/carousel.module.css";
import Layout from "/components/layout.js";
import React from "react";
import GalleryItem from "/components/galleryitem.js";

import lull1 from "/public/marginalia/lull1.jpg";
import lull2 from "/public/marginalia/lull2.jpg";
import lull3 from "/public/marginalia/lull3.jpg";
import underbrush from "/public/marginalia/underbrush.png";
import outlines from "/public/marginalia/outlines.jpg";
const marginalia = [lull1, lull2, lull3, underbrush, outlines];

// works
// const SLIDE_COUNT = 3;
// const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function DigitalMedia() {
  return (
    <Layout>
      <div className={styles.container}>
        <p>An exploration of my observations and moments in nature. Through a multimedia collection of photography, artwork, and audio, I invite a mindful pause to watch the forest together.</p>
        <div className={styles.audio_container}>
          <audio controls src="/marginalia/citron.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
      </div>
    </Layout>
  );
}
