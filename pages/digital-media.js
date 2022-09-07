import Head from "next/head";
import Image from "next/image";
import styles from "/components/home.module.css";
import carousel from "/components/carousel.module.css";
import Layout from "/components/layout.js";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "/components/carousel.js";

import yearning_emotion_1 from "/public/digital-media/yearning-emotion/1.png";
import yearning_emotion_2 from "/public/digital-media/yearning-emotion/2.png";
import yearning_emotion_3 from "/public/digital-media/yearning-emotion/3.png";

const slides = [
  yearning_emotion_1,
  yearning_emotion_2,
  yearning_emotion_3,
];

// works
// const SLIDE_COUNT = 3;
// const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function DigitalMedia() {
  return (
    <Layout>
      <EmblaCarousel slides={slides} />
    </Layout>
  );
}
