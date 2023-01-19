import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Carousel.module.css";
// import { Fade } from 'react-slideshow-image';

import  Im1  from "./HomeMidImages/m1.jpg";
import  Im2  from "./HomeMidImages/m2.jpg";
import  Im3  from "./HomeMidImages/m3.jpg";
import  Im4  from "./HomeMidImages/m4.jpg";
import  Im5  from "./HomeMidImages/m5.jpg";
import  Im6  from "./HomeMidImages/m6.jpg";
import  Im7  from "./HomeMidImages/m7.jpg";
import  Im8  from "./HomeMidImages/m8.jpg";
import  Im9  from "./HomeMidImages/m9.jpg";
import  Im10  from "./HomeMidImages/m10.jpg";

import  Im11  from "./HomeMidImages/m11.jpg";
import  Im12  from "./HomeMidImages/m12.jpg";
import  Im13  from "./HomeMidImages/m13.jpg";
import  Im14  from "./HomeMidImages/m14.jpg";
import  Im15  from "./HomeMidImages/m15.jpg";
import  Im16  from "./HomeMidImages/m16.jpg";
import  Im17  from "./HomeMidImages/m17.jpg";
import  Im18  from "./HomeMidImages/m18.jpg";
import  Im19  from "./HomeMidImages/m19.jpg";
import  Im20  from "./HomeMidImages/m20.jpg";

import  Im21  from "./HomeMidImages/m21.jpg";
import  Im22  from "./HomeMidImages/m22.jpg";
import  Im23  from "./HomeMidImages/m23.jpg";
import  Im24  from "./HomeMidImages/m24.jpg";
import  Im25  from "./HomeMidImages/m25.jpg";
import  Im26  from "./HomeMidImages/m26.jpg";
import  Im27  from "./HomeMidImages/m27.jpg";
import  Im28  from "./HomeMidImages/m28.jpg";



const slideImages = [
  {
    url: Im1,
  },
  {
    url: Im2,
  },
  {
    url: Im3,
  },
  {
    url: Im4,
  },
  {
    url: Im5,
  },
  {
    url: Im6,
  },
  {
    url: Im7,
  },
  {
    url: Im8,
  },
  {
    url: Im9,
  },
  {
    url: Im10,
  },
  {
    url: Im11,
  },
  {
    url: Im12,
  },
  {
    url: Im13,
  },
  {
    url: Im14,
  },
  {
    url: Im15,
  },
  {
    url: Im16,
  },
  {
    url: Im17,
  },
  {
    url: Im18,
  },
  {
    url: Im19,
  },
  {
    url: Im20,
  },
  {
    url: Im21,
  },
  {
    url: Im22,
  },
  {
    url: Im23,
  },
  {
    url: Im24,
  },
  {
    url: Im25,
  },
  {
    url: Im26,
  },
  {
    url: Im27,
  },
  {
    url: Im28,
  }
];


const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
const Carousel1 = () => {
  return (
    <div className={styles.slidecontainer}>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className={styles.eachslide} key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carousel1;
