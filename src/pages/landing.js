import React from "react"
// import profile from '../images/profile1.png'
// import profile from '../images/user.jpeg'
import profile from '../images/me.jpeg'

import ImageOverlay from '../components/image_overlay'

export default function LandingPage() {
  return (
    <div className="landing-page" id="home">
        <div className="image-section">
            <ImageOverlay />
            <div className="profile-image">
                <img src={profile}
                    className="profile-picture"
                    alt="profile picture"
                />
            </div>
        </div>
        <div className="information-section">
            <div className="profile-name"> 
                Wai Ho Vong
            </div>
            <div className="about-section">
                <p className="about--details">Hi, I'm Wai Ho! I'm a final year Computer Science student at The University of Adelaide. <br /> 
                    I'm passionate about front-end development and have an interest in fullstack development. <br /> <br />
                    My hobbies include astronomy, listening to music, photography and Formula 1.
                </p>
            </div>
        </div>
        <div className="arrow-down"></div>
    </div>
  )
}

