import media1 from "./1.png";
import media2 from "./2.png";
import media3 from "./3.png";

export const media = [media1, media2, media3];
export const mediaByIndex = index => media[index % media.length];
