import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/components/carousel.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "/public/digital-media/yearning-emotion";

import yearning_emotion_1 from "/public/digital-media/yearning-emotion/1.png";
import yearning_emotion_2 from "/public/digital-media/yearning-emotion/2.png";
import yearning_emotion_3 from "/public/digital-media/yearning-emotion/3.png";

const yearning_emotion = [
  yearning_emotion_1,
  yearning_emotion_2,
  yearning_emotion_3,
];

export const EmblaCarousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {slides.map((index) => (
          <div className={styles.embla__slide} key={index}>
            <Image src={mediaByIndex(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
