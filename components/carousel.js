import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/components/carousel.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "/public/digital-media/yearning-emotion";

export const EmblaCarousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {slides.map((index) => (
          <div className={styles.embla__slide}>
            <Image
            src={index.src}
            height={index.height}
            width={index.width}
            placeholder="blur"
            blurDataURL={index.blurDataURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
