import React from "react"
import { Link } from "gatsby"
import {Helmet} from 'react-helmet'

import NavBar from "../components/navbar"
import LandingPage from "./landing"
import Projects from "./projects"

const IndexPage = () => (
	<div>
		<Helmet>
			<title>Wai Ho Vong</title>
		</Helmet>
		<div>
			<NavBar />
		</div>
		<div className="landing-container">
			<LandingPage />
		</div>
		<Projects />
	</div>
)

export default IndexPage
