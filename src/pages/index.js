import React from "react"
import { Link } from "gatsby"

import NavBar from "../components/navbar"
import LandingPage from "./landing"
import Projects from "./projects"

const IndexPage = () => (
	<div>
		<div>
			<NavBar />
		</div>
		<div className="landing-container">
			<LandingPage / >
		</div>
		<Projects />
	</div>
)

export default IndexPage
