'use client'

import image1 from "@/public/service/img-1.png";
import image2 from "@/public/service/img-2.png";
import image3 from "@/public/service/img-3.png";
import image4 from "@/public/service/img-4.png";
import image5 from "@/public/service/img-5.png";
import image6 from "@/public/service/img-6.png";
import image7 from "@/public/service/img-7.png";
import image8 from "@/public/service/img-8.png";
import image9 from "@/public/service/img-9.jpg";
import image10 from "@/public/service/img-10.jpg";
import image11 from "@/public/service/img-11.jpg";
import image12 from "@/public/service/img-12.png";


import icon1 from "@/public/service/i-1.png"
import icon2 from "@/public/service/i-2.png"
import icon3 from "@/public/service/i-3.png"
import icon4 from "@/public/service/i-4.png"
import icon5 from "@/public/service/i-5.png"
import icon6 from "@/public/service/i-6.png"
import icon7 from "@/public/service/i-7.png"
import icon8 from "@/public/service/i-8.png"
import icon9 from "@/public/service/i-9.png"
import icon10 from "@/public/service/i-10.png"



export interface BrandingCardData {
  id: number;
  title: string;
  description: string;
  frontImage: any;
  backImage: any;
  icons: any[];
}

export const brandingCards: BrandingCardData[] = [
  {
    id: 1,
    title: "Branding & Identity",
    description:
      "Build a memorable brand through strategic design and visual storytelling.",
    frontImage: image2,
    backImage: image1,
    icons: [icon1, icon2], 
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Design intuitive interfaces that users love and trust.",
    frontImage: image3,
    backImage: image4,
    icons: [icon2, icon10], 
  },
  {
    id: 3,
    title: "Product Design",
    description:
      "Turn ideas into delightful digital products.",
    frontImage: image5,
    backImage: image6,
    icons: [icon2, icon3, icon1], 
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "Create responsive websites that convert visitors into customers.",
    frontImage: image8,
    backImage: image7,
    icons: [icon4, icon5, icon2], 
  },
  {
    id: 5,
    title: "Visual Design",
    description:
      "Craft visuals that communicate clearly and beautifully.",
    frontImage: image10,
    backImage: image9,
    icons: [icon6, icon1, icon2], 
  },
  {
    id: 6,
    title: "Design Systems",
    description:
      "Build scalable design systems for consistent experiences.",
    frontImage: image12,
    backImage: image11,
    icons: [icon7, icon8, icon9], 
  },
];
