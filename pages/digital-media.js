import Head from "next/head";
import Image from "next/image";
import styles from "/components/gallery.module.css";
import carousel from "/components/carousel.module.css";
import Layout from "/components/layout.js";
import React from "react";
import GalleryItem from "/components/galleryitem.js";

import yearning_emotion_1 from "/public/digital-media/yearning-emotion/1.png";
import yearning_emotion_2 from "/public/digital-media/yearning-emotion/2.png";
import yearning_emotion_3 from "/public/digital-media/yearning-emotion/3.png";
const yearning_emotion = [
  yearning_emotion_1,
  yearning_emotion_2,
  yearning_emotion_3,
];

import warmth_1 from "/public/digital-media/warmth/main.png";
import warmth_2 from "/public/digital-media/warmth/render.png";
import warmth_3 from "/public/digital-media/warmth/design.png";
const warmth = [warmth_1, warmth_2, warmth_3];

import colors_mag_1 from "/public/digital-media/colors-mag/1.jpeg";
import colors_mag_2 from "/public/digital-media/colors-mag/2.jpeg";
import colors_mag_3 from "/public/digital-media/colors-mag/3.jpeg";
const colors_mag = [
  colors_mag_1,
  colors_mag_2,
  colors_mag_3,
];

// works
// const SLIDE_COUNT = 3;
// const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function DigitalMedia() {
  return (
    <Layout>
      <div className={styles.container}>
        <GalleryItem
          title="Yearning Emotion"
          id="yearning-emotion"
          year="2020"
          description="An exploration of emotional affect and tension between forms in color."
          images={yearning_emotion}
        />
      </div>
      <div className={styles.container}>
        <GalleryItem
          title="warmth Tea House"
          id="warmth-tea-house"
          year="2020"
          description="warmth is a conceptual tea house specializing in organic Taiwanese tea. The brand provides a friendly, welcoming atmosphere through warm colors and elegant design. The special osmanthus and oolong tea blend is represented by an abstract illustration with soft gradients and figure dualism. The sweet orange and indigo colors are chosen to represent the growing osmanthus plants and create a warm visual identity."
          images={warmth}
        />
      </div>
      <div className={styles.container}>
        <GalleryItem
          title="COLORS MAG"
          id="colors-mag"
          year="2019"
          description="COLORS MAG is a project about developing personal style, influence of colors, and individuality. Each release of the lookbook showcases an individual through a prevailing color, photography of their outfit, and an interview about their interest in fashion."
          images={colors_mag}
        />
      </div>
    </Layout>
  );
}
