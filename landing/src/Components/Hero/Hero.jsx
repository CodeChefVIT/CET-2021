import "./Hero.css"
import React from 'react'
import Navbar from "../Navbar/Navbar"
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
        <Navbar />
        <section className="main">
            <div className="Hero-content-container">
                <div className="Explorecard container text-center px-2 pt-24">
                    <div className="ExploreContent container">
                        <p className="heroText">
                        Explore more than 100 clubs, teams & chapters on{" "}
                        <span className="bold text-white focus-word">
                        {" "}
                        <strong><span className="blue">Common Entry Test</span></strong>
                        </span>
                        </p>
                        <div className="cardButton">
                            <button><a href="/">Register</a></button>
                        </div>
                    </div>
                </div>
                <div className="DivHeroTitle">
                    <h2 className="HeroTitle">C <span className="blue">E </span>T</h2>
                </div>
            </div>
        </section>

        <section className="What container">
            {/* <div className="WhatTitle">
               <h2>What is CET</h2>
               <p>Common Entry Test (CET) is a unique one of its kind portal made to make the recruitment process easier for VIT's Clubs, Teams and Chapters.</p>
            </div> */}
        </section>
        </>
    )
}

export default Hero
