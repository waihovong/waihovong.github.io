import React from "react"
import { Link } from "gatsby"
import { Fade } from 'react-reveal'
import XLaunch from '../images/X-Launch.jpg'
import Pomodoro from '../images/PomodoroTimer.png'
import Umami from '../images/UMAMI.jpg'
import Github from '../images/github.svg'
import Demo from '../images/demo.png'

export default function Projects() {
    return (
        <div className="project-container">
            <div className="project-container-inner">
                <h2 className="header--name header--format" id="projects">Projects</h2>
            </div>
            <div className="project-section">
                <Fade left>
                    <div className="project-section-image">
                            <img src={XLaunch}
                                className="project-image"
                                alt="x launch project"
                                />
                    </div>
                </Fade>
                <div className="project-desc project-section-description">
                    <div className="project-description">
                        <h2 className="project--name">X Launch <span className="project--as">SpaceX mission tracker</span></h2>
                        <p className="project--details">X Launch is a site dedicated to SpaceX, utilising data provided by <a href="https://github.com/r-spacex/SpaceX-API" rel="noopener noreferrer" target="_blank">SpaceX-API</a>. X Launch gives you the latest and previous launch missions as well as vehicle information on SpaceX's fleet.</p>
                    </div>
                    <div className="social-section">
                        <div>
                            <button className="social--button">
                                <a href="https://github.com/waihovong/x-launch"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                <img src={Github}
                                    className="social--icon"
                                    alt="github"
                                    />
                                </a>
                            </button>
                        </div>
                        <div>
                            <button className="social--button">
                                <a href="https://waihovong.github.io/x-launch/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                <img src={Demo}
                                    className="social--icon"
                                    alt="demo"
                                />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-section project-section-alt">
                <div className="project-desc project-section-description-alt">
                    <div className="project-description">
                        <h2 className="project--name">Pomodoro 25 <span className="project--as">Time management tool</span></h2>
                        <p className="project--details">Pomodoro 25 is a productivity management tool for effective work and study. This web application is inspired by the Pomodoro Technique developed by Francesco Cirillo. </p>
                    </div>
                    <div className="social-section">
                        <div>
                            <button className="social--button">
                                <a href="https://github.com/waihovong/Pomodoro-25"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                <img src={Github}
                                    className="social--icon"
                                    alt="github"
                                    />
                                </a>
                            </button>
                        </div>
                        <div>
                            <button className="social--button">
                                <a href="https://waihovong.github.io/Pomodoro-25/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                <img src={Demo}
                                    className="social--icon"
                                    alt="demo"
                                />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <Fade right>
                    <div className="project-section-image">    
                        <img src={Pomodoro}
                            className="project-image"
                            alt="pomodoro project"
                            />
                    </div>
                </Fade>
            </div>
            <div className="project-section">
                <Fade left >
                    <div className="project-section-image">
                        <img src={Umami}
                            className="project-image"
                            alt="umami project"
                            />
                    </div>
                </Fade>
                <div className="project-desc project-section-description">
                    <div className="project-description">
                        <h2 className="project--name">UMAMI <span className="project--as">Restaurant booking web application</span></h2>
                        <p className="project--details">UMAMI is a restaurant booking web application for customers to reserve a seat at their favourite restaurant.</p>
                    </div>
                    <div className="social-section">
                        <div>
                            <button className="social--button">
                                <a href="https://github.com/waihovong/umami"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                <img src={Github}
                                    className="social--icon"
                                    alt="github"
                                    />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}