import Head from "next/head";
import Image from "next/image";
import styles from "/components/home.module.css";
import carousel from "/components/carousel.module.css"
import Layout from "/components/layout.js";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import yearning_emotion_1 from "/public/digital-media/yearning-emotion/1.png"
import yearning_emotion_2 from "/public/digital-media/yearning-emotion/2.png"
import yearning_emotion_3 from "/public/digital-media/yearning-emotion/3.png"

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel()
  
    return (
      <div className={carousel.embla} ref={emblaRef}>
        <div className={carousel.embla__container}>
          <div className={carousel.embla__slide}>{yearning_emotion_1}</div>
          <div className={carousel.embla__slide}>{yearning_emotion_2}</div>
          <div className={carousel.embla__slide}>{yearning_emotion_3}</div>
        </div>
      </div>
    )
  }

export default function Home() {
return (
    <EmblaCarousel />
)
}
