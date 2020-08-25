import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Headroom from 'react-headroom';

import "../styles/global.css"

const NavBar = () => (
    <nav className="navigation-bar">
        {/* <Headroom> */}
            <ul className="navigation--header">
                <AnchorLink to="/#home" className="navigation--option">Home</AnchorLink>
                <AnchorLink to="/#projects" className="navigation--option">Projects</AnchorLink>
                <li className="navigation--option">Contact</li>
                <li className="navigation--option">Resume</li>
            </ul>
        {/* </Headroom> */}
    </nav>
)

export default NavBar