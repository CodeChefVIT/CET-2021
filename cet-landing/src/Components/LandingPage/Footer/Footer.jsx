import React from 'react'
import './Footer.css'
import Logo from '../../../Assets/CET.png'
import facebook from '../../../Assets/Logos/Facebook.svg'
import instagram from '../../../Assets/Logos/Instagram.svg'
import twitter from '../../../Assets/Logos/Twitter.svg'
import youtube from '../../../Assets/Logos/YouTube.svg'
import linkedin from '../../../Assets/Logos/LinkedIn.svg'
import medium from '../../../Assets/Logos/Medium.svg'



export default function Footer() {
    return (
        <>
        <div class="footerDiv">
            <img src={Logo} alt="Codechef logo footer" style={{height:"50px"}}/>
            <div class="footerContentDiv">
                <div class="footerContentTextDiv">
                    <p class="footerContentText">One stop solution to make club, team and chapter recruitments in VIT simpler and hassle free. </p>
                </div>

                <div class="footerLinksContainerDiv">
                    <div class="footerLinksDiv">
                        <ul>
                            <li><a href="/index.html">Home</a></li>
                            <li><a href="https://medium.com/codechef-vit" target="_blank">About</a></li>
                            <li><a href="/Teams/">Partners</a></li>
                            <li class="footerLinkLast"><a href="/Projects/">Contact</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="footerLineBreak"></div>
            <div class="footerBottom">
                <div class="footerBottomCopyrightDiv">

                    <span>&copy; Copyright 2021 | CodeChef-VIT | All rights reserved.</span>
                </div>
                <div class="footerSocials">
                    <a href=" https://www.facebook.com/codechefvit/ " target="_black"><img class="footerSocialImage" src={facebook} alt=" "/></a>
                    <a href="https://twitter.com/codechefvit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_black"><img class="footerSocialImage" src={twitter} alt=" "/></a>
                    <a href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/" target="_black"><img class="footerSocialImage" src={linkedin} alt=" "/></a>
                    <a href="https://www.youtube.com/c/CodeChefVIT" target="_black"><img class="footerSocialImage" src={youtube} alt=" "/></a>
                    <a href="https://www.instagram.com/codechefvit/" target="_black"><img class="footerSocialImage" src={instagram} alt=" "/></a>
                    <a href="https://medium.com/codechef-vit" target="_black"><img class="footerSocialImage" src={medium} alt=" "/></a>
                    {/* <a href="https://github.com/CodeChefVIT" target="_black"><img class="footerSocialImage" src="../Images/Socials/github.png " alt=" "/></a> */}
                </div>
            </div>
        </div>
    </>
    )
}
