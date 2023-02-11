import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Photography from '../pages/photo';
import PDF from '../components/WaiHoVong.pdf'

import "../styles/global.css"

const NavBar = () => (
    <nav className="navigation-bar">
            <ul className="navigation--header">
                <AnchorLink to="/#home" className="navigation--option">Home</AnchorLink>
                <AnchorLink to="/#projects" className="navigation--option">Projects</AnchorLink>
                <Link to={`/photography/`} className="photo-cta"> PHOTOGRAPHY </Link>
                <br/>
                <li className="navigation--option">
                    <a href="mailto:waihovong@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
                        Contact
                    </a>
                </li>
                <li className="navigation--option">
                    <a href={PDF}
                    target="_blank"
                    rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
    </nav>
)

export default NavBar