import React from 'react'
import SocialButton from '../social-button'
import GitHubButton from '../github-button';


const HeroImage = () =>{
    return(
        <div className="hero-image">
            <h1 className="hero-text"> Mukul Rathi</h1>
            <SocialButton href="https://www.linkedin.com/in/mukul-rathi-17230014a/" alt="LinkedIn"/>
            <GitHubButton srcCode="http://github.com/mukul-rathi"/>
        </div>
    );
}

export default HeroImage;