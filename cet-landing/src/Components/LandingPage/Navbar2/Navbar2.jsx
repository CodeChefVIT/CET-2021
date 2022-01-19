import React, { useState, useEffect } from 'react'
import './Navbar2.css';

export default function Navbar2() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (

        <nav>
            <div className="CET-logo">
                <a target="_blank" href="https://codechefvit.com" rel="noreferrer">
                    <h1 style={{
                        color: 'white',
                        fontFamily: 'Inter',
                        fontWeight: 'bold'
                    }}>
                        C<span className="text-cchover font-bold">E</span>T
                    </h1>
                </a>
            </div>

            {(toggleMenu || screenWidth > 768) && (
                <ul className="list">

                    <li className="items"><a href="#">Home</a></li>
                    <li className="items"><a href="#about">About</a></li>
                    <li className="items"><a href="#partners">Partners</a></li>
                    <li className="items"><a href="#contact">Contact</a></li>

                </ul>
            )}

            <button onClick={toggleNav} className="btn"><img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" /></button>
        </nav>
    )
}
