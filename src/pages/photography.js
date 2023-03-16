import React from "react";
import Photo from "./photo.js";

import "../styles/global.css"

import SKV1 from '../images/Portfolio/Vertical/Zine-4574-min.webp' //
import SKV2 from '../images/Portfolio/Vertical/Zine-4668-2-min.webp' //
import SKV3 from '../images/Portfolio/Vertical/Zine-4739-min.webp'
import SKV4 from '../images/Portfolio/Vertical/Zine-4776-min.webp'
import SKV5 from '../images/Portfolio/Vertical/Zine-4803-min.webp'
import SKV6 from '../images/Portfolio/Vertical/Zine-5162-min.webp'
import SKV7 from '../images/Portfolio/Vertical/Zine-5236-2-min.webp'
import SKV8 from '../images/Portfolio/Vertical/Zine-5565-min.webp'
import SKV9 from '../images/Portfolio/Vertical/Zine-3774-3-min.webp'
import SKV10 from '../images/Portfolio/Vertical/Zine-3816-min.webp' //
import SKV11 from '../images/Portfolio/Vertical/Zine-5653-min.webp'
import SKV12 from '../images/Portfolio/Vertical/Zine-4639-min.webp'

import SKV13 from '../images/Portfolio/Vertical/Zine-5694-2-min.jpg'
import SKV14 from '../images/Portfolio/Vertical/Zine-4001-min.jpg'
import SKV15 from '../images/Portfolio/Vertical/Zine-2903-min.jpg'
import SKV16 from '../images/Portfolio/Vertical/Zine-2844-min.jpg'
import SKV17 from '../images/Portfolio/Vertical/Zine-4719-min.webp'
import SKV18 from '../images/Portfolio/Vertical/Zine_2717-2-min.jpg'

import SKH1 from '../images/Portfolio/Horizontal/Zine-2308-min.jpg'
import SKH2 from '../images/Portfolio/Horizontal/Zine-4592-min.webp'
import SKH3 from '../images/Portfolio/Horizontal/Zine-4871-min.webp'
import SKH4 from '../images/Portfolio/Horizontal/Zine-5228-2-min.webp'
import SKH5 from '../images/Portfolio/Horizontal/Zine-2411-min.webp'

const Photography = () => {
    const images = [
        {
          image1: SKH1,
          image2: null,
          title: "", 
          orientation: "horizontal"
        },
        {
          image1: SKV1,
          image2: SKV2,
          title: "", 
          orientation: "vertical"
        },
        {
          image1: SKV3,
          image2: SKV4,
          title: "34", 
          orientation: "vertical"
        },
        {
          image1: SKH2,
          image2: null,
          title: "", 
          orientation: "horizontal"
        },
        {
          image1: SKV5,
          image2: SKV12,
          title: "512", 
          orientation: "vertical"
        },
        {
          image1: SKH3,
          image2: null,
          title: "", 
          orientation: "horizontal"
        },
        {
          image1: SKV6,
          image2: SKV7,
          title: "67", 
          orientation: "vertical"
        },
        {
            image1: SKH5,
            image2: null,
            title: "", 
            orientation: "horizontal"
          },
        {
          image1: SKV8,
          image2: SKV11,
          title: "89", 
          orientation: "vertical"
        },
        {
            image1: SKV10,
            image2: SKV9,
            title: "1011", 
            orientation: "vertical"
          },
        {
          image1: SKV13,
          image2: SKV17,
          title: "",
          orientation: "vertical"
        },
        {
          image1: SKV15,
          image2: SKV16,
          title: "",
          orientation: "vertical"
        },
        {
          image1: SKV14,
          image2: SKV18,
          title: "",
          orientation: "vertical"
        }

      ];

    return (
        <div className="container">
            <div className="title">
                <h1>Photography</h1>
                <h3>2022</h3>
            </div>
            <div className="home">
                <a href="/" className="cta">Go back Home </a>
            </div>

            {images.map((image, index) => (
                <Photo 
                    key={index}
                    image1={image.image1}
                    image2={image.image2}
                    title={image.title}
                    orientation={image.orientation}
                />
            ))}
        </div>
    )
}

export default Photography;