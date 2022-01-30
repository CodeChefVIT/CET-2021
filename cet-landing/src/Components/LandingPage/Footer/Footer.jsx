import React from 'react'
import './Footer.css'
import Logo from '../../../Assets/CET.png'
import facebook from '../../../Assets/Logos/Facebook.svg'
import instagram from '../../../Assets/Logos/Instagram.svg'
import twitter from '../../../Assets/Logos/Twitter.svg'
import youtube from '../../../Assets/Logos/YouTube.svg'
import linkedin from '../../../Assets/Logos/LinkedIn.svg'
import medium from '../../../Assets/Logos/Medium.svg'
import github from '../../../Assets/Logos/Subtract.svg'
import { Link } from 'react-router-dom'



export default function Footer() {
    return (
        <>
            <div className="footerDiv">
                <img src={Logo} alt="Codechef logo footer" style={{ height: "50px" }} />
                <div className="footerContentDiv">
                    <div className="footerContentTextDiv">
                        <p className="footerContentText">One stop solution to make club, team and chapter recruitments in VIT simpler and hassle free. </p>
                    </div>

                    <div className="footerLinksContainerDiv">
                        <div className="footerLinksDiv">
                            <ul>
                                <li><a href="#"><Link to="#home" />Home</a></li>
                                <li><a href="#about" ><Link to="#about" />About</a></li>
                                <li><a href="#partners"><Link to="#partners" />Partners</a></li>
                                <li className="footerLinkLast"><a href="#contact"><Link to="#contact" />Contact</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div Name="footerLineBreak"></div>
                <div className="footerBottom">
                    <div className="footerBottomCopyrightDiv">

                        <span>&copy; Copyright 2022 | CodeChef-VIT | All rights reserved.</span>
                    </div>
                    <div className="footerSocials">
                        <a href=" https://www.facebook.com/codechefvit/ " target="_black"><img className="footerSocialImage" src={facebook} alt=" " /></a>
                        <a href="https://twitter.com/codechefvit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_black"><img className="footerSocialImage" src={twitter} alt=" " /></a>
                        <a href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/" target="_black"><img className="footerSocialImage" src={linkedin} alt=" " /></a>
                        <a href="https://www.youtube.com/c/CodeChefVIT" target="_black"><img className="footerSocialImage" src={youtube} alt=" " /></a>
                        <a href="https://www.instagram.com/codechefvit/" target="_black"><img className="footerSocialImage" src={instagram} alt=" " /></a>
                        <a href="https://medium.com/codechef-vit" target="_black"><img className="footerSocialImage" src={medium} alt=" " /></a>
                        <a href="https://github.com/CodeChefVIT" target="_black"><img class="footerSocialImage" src={github} alt=" " /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
