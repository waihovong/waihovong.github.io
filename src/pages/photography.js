import React from "react";
import Photo from "./photo.js";

import "../styles/global.css"

import SKV1 from '../images/Portfolio/Vertical/Zine-4574.jpg' //
import SKV2 from '../images/Portfolio/Vertical/DSCF4668-2.jpg' //
import SKV3 from '../images/Portfolio/Vertical/Zine-4739.jpg'
import SKV4 from '../images/Portfolio/Vertical/Zine-4776.jpg'
import SKV5 from '../images/Portfolio/Vertical/Zine-4803.jpg'
import SKV6 from '../images/Portfolio/Vertical/Zine-5162.jpg'
import SKV7 from '../images/Portfolio/Vertical/Zine-5236-2.jpg'
import SKV8 from '../images/Portfolio/Vertical/Zine-5565.jpg'
import SKV9 from '../images/Portfolio/Vertical/Zine-3774-3.jpg'
import SKV10 from '../images/Portfolio/Vertical/Zine-3816.jpg' //
import SKV11 from '../images/Portfolio/Vertical/Zine-5653.jpg'
import SKV12 from '../images/Portfolio/Vertical/Zine-4639.jpg'

import SKH1 from '../images/Portfolio/Horizontal/Zine-2308.jpg'
import SKH2 from '../images/Portfolio/Horizontal/Zine-4592.jpg'
import SKH3 from '../images/Portfolio/Horizontal/Zine-4871.jpg'
import SKH4 from '../images/Portfolio/Horizontal/Zine-5228-2.jpg'
import SKH5 from '../images/Portfolio/Horizontal/Zine-2411.jpg'

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
          title: "", 
          orientation: "vertical"
        },
        {
          image1: SKH2,
          image2: null,
          title: "", 
          orientation: "horizontal"
        },
        {
          image1: SKH3,
          image2: null,
          title: "", 
          orientation: "horizontal"
        },
        {
          image1: SKV5,
          image2: SKV12,
          title: "", 
          orientation: "vertical"
        },
        {
          image1: SKV6,
          image2: SKV7,
          title: "", 
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
          image2: SKV9,
          title: "", 
          orientation: "vertical"
        },

        {
            image1: SKV10,
            image2: SKV11,
            title: "", 
            orientation: "vertical"
          },
        {
          image1: null,
          image2: SKH4,
          title: "", 
          orientation: "horizontal"
        },

      ];

    return (
        <div>
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